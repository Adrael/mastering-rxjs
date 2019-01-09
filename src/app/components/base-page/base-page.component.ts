import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IPageComponent } from '../../interfaces/page-component.interface';

declare var Prism: any;
type ObservableLike<T> = Observable<T> | Subject<T>;

@Component({
  selector: 'app-base-page',
  template: ''
})
export class BasePageComponent implements IPageComponent, AfterViewInit, OnDestroy {
  public results: Array<any> = [];
  public isRunning = false;
  protected takeUntilStopped$ = new Subject<void>();
  private ongoingSubscriptions: Subscription;

  public ngAfterViewInit(): void {
    Prism.highlightAll();
  }

  public ngOnDestroy(): void {
    this.stop();
  }

  protected plug(observableLike: ObservableLike<any> | Subscription, name?: string): void {
    if (observableLike instanceof Subscription) {
      this.ongoingSubscriptions.add(observableLike);
      return;
    }

    observableLike
      .pipe(takeUntil(this.takeUntilStopped$))
      .subscribe((data: any) => {
        if (name) {
          console.log(`${name}:`, data);
          this.results.push(`${name}: ${data}`);
        } else {
          console.log('Received data:', data);
          this.results.push(data);
        }
      });
  }

  public start(): void {
    this.isRunning = true;
    this.ongoingSubscriptions = new Subscription();
  }

  public stop(): void {
    this.isRunning = false;

    this.takeUntilStopped$.next();

    if (this.ongoingSubscriptions && !this.ongoingSubscriptions.closed) {
      this.ongoingSubscriptions.unsubscribe();
    }

    this.ongoingSubscriptions = null;
  }
}
