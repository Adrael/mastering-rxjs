import {Inject, Injectable, NgZone} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {asyncScheduler, Observable} from 'rxjs';
import {debounceTime, observeOn, publish, refCount, take} from 'rxjs/operators';
import {IdleOptions} from '../../models/idle-options.model';
import {IDeadline} from '../../interfaces/deadline.interface';
import {IdleCallback} from '../../models/idle-callback.model';
import {IRequestIdleCallbackService} from '../../interfaces/request-idle-callback.service.interface';

// requestIdleCallback polyfill
// Initial version can be checked here https://github.com/gdi2290/request-idle-callback/blob/master/src/index.ts
// General introduction to the method can be found here https://developers.google.com/web/updates/2015/08/using-requestidlecallback
@Injectable()
export class RequestIdleCallbackService implements IRequestIdleCallbackService {
  private readonly idleHandlers = new Map();
  private readonly currentWindow: any;
  private readonly stableObservable$: Observable<any>;

  constructor(private readonly ngZone: NgZone, @Inject(DOCUMENT) private readonly document: any) {
    this.currentWindow = this.document.defaultView;
    this.stableObservable$ = this.ngZone.onStable.pipe(observeOn(asyncScheduler), publish(), refCount());
  }

  public requestIdleCallback(callback): void {
    if (this.currentWindow && 'requestIdleCallback' in this.currentWindow) {
      this.currentWindow.requestIdleCallback(callback);
    } else {
      this.polyfillRequestIdleCallback(callback);
    }
  }

  public cancelIdleCallback(handler) {
    if (this.currentWindow && 'cancelIdleCallback' in this.currentWindow) {
      this.currentWindow.cancelIdleCallback(handler);
    } else {
      this.polyfillCancelIdleCallback(handler);
    }
  }

  private polyfillCancelIdleCallback(handler) {
    const {unsubscribe, timerId}: any = this.idleHandlers.get(handler);

    if (unsubscribe) {
      unsubscribe();
    }

    if (timerId) {
      this.ngZone.runOutsideAngular(() => {
        clearTimeout(timerId);
      });
    }

    this.idleHandlers.delete(handler);
  }

  private polyfillRequestIdleCallback(callback: IdleCallback, {timeout}: IdleOptions = {timeout: 50}) {
    let dispose;
    this.ngZone.runOutsideAngular(() => {
      const cb = () => {
        const start: number = Date.now();
        const deadline: IDeadline = {
          didTimeout: false,
          timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
        };

        // Timeout is used when idle callback is cancelled
        setTimeout(() => {
          deadline.didTimeout = true;
          if (dispose && !dispose.closed) {
            dispose.unsubscribe();
          }
        }, timeout || 50);

        callback(deadline);
      };

      if (this.ngZone.isStable) {
        const timerId = setTimeout(cb, 10);
        this.idleHandlers.set(callback, {timerId});
      } else {
        dispose = this.stableObservable$.pipe(debounceTime(10), take(1)).subscribe(() => {
          const timerId = setTimeout(cb, 10);
          this.idleHandlers.set(callback, {
            unsubscribe: dispose.unsubscribe,
            timerId
          });
        });
        this.idleHandlers.set(callback, {
          unsubscribe: dispose.unsubscribe
        });
      }
    });
  }
}
