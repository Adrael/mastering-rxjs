import { interval } from 'rxjs';
import { RunHelpers } from 'rxjs/internal/testing/TestScheduler';
import { take, throttleTime } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

// Simple deep equal assertion.
const assertDeepEqual = (actual: any, expected: any): void => {
  expect(actual).toEqual(expected);
};

describe('RxJS behavior testing', () => {
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler(assertDeepEqual);
  });

  it('generate the stream correctly', () => {
    scheduler.run((helpers: RunHelpers) => {
      const source$ = helpers.cold('-a--b--c---|');
      const subscriptions =        '^----------!';
      const expected =             '-a-----c---|';

      const piped$ = source$.pipe(throttleTime(3));

      helpers.expectObservable(piped$).toBe(expected);
      helpers.expectSubscriptions(source$.subscriptions).toBe(subscriptions);
    });
  });

  it('should work for asynchronous tasks too', () => {
    scheduler.run((helpers: RunHelpers) => {
      const source$ = interval(1000);
      const piped$ = source$.pipe(take(3));
      const expected = '1s a 999ms b 999ms (c|)';
      const expectedValues = { a: 0, b: 1, c: 2 };

      helpers.expectObservable(piped$).toBe(expected, expectedValues);
    });
  });
});
