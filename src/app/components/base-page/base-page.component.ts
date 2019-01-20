import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {IPageComponent} from '../../interfaces/page-component.interface';

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

  public log(message: any): void {
    this.results.push(message);
    console.log('Received data:', message);
  }

  protected plug(
    observableLike: ObservableLike<any> | Subscription,
    name?: string,
    consoleOnly: boolean = false,
    ignore: boolean = false): void {
    if (observableLike instanceof Subscription) {
      this.ongoingSubscriptions.add(observableLike);
      return;
    }

    observableLike
      .pipe(takeUntil(this.takeUntilStopped$))
      .subscribe(
        (data: any) => {
          if (ignore) {
            return;
          }

          if (name) {
            console.log(`${name}:`, data);
            this.results.push(`${name}: ${data}`);
            return;
          }

          if (consoleOnly) {
            this.results.push(`Open your browser's DevTools to see the results`);
          } else {
            this.results.push(data);
          }

          console.log('Received data:', data);
        },
        (error: any) => {
          if (ignore) {
            return;
          }

          console.error(`Received error${name ? ` for ${name}` : ''}:`, error);
        },
        () => {
          this.stop();

          if (ignore) {
            return;
          }

          console.warn(`Observable${name ? ` ${name}` : ''} has completed!`);
        });
  }
}
