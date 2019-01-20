import { Observable, OperatorFunction } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';

export function firstOrUntil<T, D>(notifier: Observable<any>,
                                   predicate?: ((value: T, index: number, source: Observable<T>) => boolean) | null,
                                   defaultValue?: D): OperatorFunction<T, T | D> {
  return (source: Observable<T>) => source.pipe(first(predicate, defaultValue), takeUntil(notifier));
}








