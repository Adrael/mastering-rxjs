import { MonoTypeOperatorFunction, Observable } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

export function takeOrUntil<T>(count: number, notifier: Observable<any>): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => source.pipe(take(count), takeUntil(notifier));
}








