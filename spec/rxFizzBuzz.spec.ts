import { hot } from 'jasmine-marbles';
import { fizzBuzz } from './rxFizzBuzz';

describe('Fizz buzz as observables', () => {
  it('shoudl do the fizzy', () => {
    const marble = '---a-b-c-d-e-f-g|';
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
    const result = source.pipe(fizzBuzz());

    expect(result).toBeObservable(expected);
  });
});
