import { hot } from 'jasmine-marbles';
import { doTheFizzy } from './rxFizzBuzz';
import { tap } from 'rxjs';

describe('Fizz buzz as observables', () => {
  it('should demonstrate marbles in an object pattern', () => {
    const marble = '---a-b-c-d-e-f-g--';
    const input = { a: 3, b: 9, c: 5, d: 10, e: 15, f: 29, g: 30 };
    const expectedOutput = {
      a: 'fizz',
      b: 'fizz',
      c: 'buzz',
      d: 'buzz',
      e: 'fizzbuzz',
      f: 29,
      g: 'fizzbuzz',
    };

    const source = hot(marble, input);
    const expected = hot(marble, expectedOutput);
    const result = source.pipe(doTheFizzy());

    expect(result).toBeObservable(expected);
  });

  it('should demonstrate marbles in an array pattern', () => {
    const marble = '---0-1-2-3-4-5-6--';
    const input = [3, 9, 5, 10, 15, 29, 30];
    const expectedOutput = [
      'fizz',
      'fizz',
      'buzz',
      'buzz',
      'fizzbuzz',
      29,
      'fizzbuzz',
    ];

    const source = hot(marble, input);
    const expected = hot(marble, expectedOutput);
    const result = source.pipe(doTheFizzy());

    expect(result).toBeObservable(expected);
  });
});

function debug() {
  return tap({
    next(value) {
      console.log(value);
    },
  });
}
