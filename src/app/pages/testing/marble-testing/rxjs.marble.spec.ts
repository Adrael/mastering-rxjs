import { interval } from 'rxjs';
import { Context, marbles } from 'rxjs-marbles/jasmine';
import { take, throttleTime } from 'rxjs/operators';

describe('RxJS behavior testing', () => {
  it('generate the stream correctly', marbles((context: Context) => {
    const source$ = context.cold('-a--b--c---|');
    const subscriptions =                '^----------!';
    const expected =                     '-a-----c---|';

    const piped$ = source$.pipe(throttleTime(3));

    context.expect(piped$).toBeObservable(expected);
    context.expect(source$).toHaveSubscriptions(subscriptions);
  }));

  it('should work for asynchronous tasks too', marbles((context: Context) => {
    const source$ = interval(1000);
    const expected = '1s a 999ms b 999ms (c|)';
    const expectedValues = { a: 0, b: 1, c: 2 };

    const piped$ = source$.pipe(take(3));

    context.expect(piped$).toBeObservable(expected, expectedValues);
  }));
});
