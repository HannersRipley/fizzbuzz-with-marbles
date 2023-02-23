import { Observable, map } from 'rxjs';

export function doTheFizzy() {
  return function (source: Observable<number>) {
    return source.pipe(fizzBuzz(), fizz(), buzz());
  };
}

function fizz() {
  return map((val: number | string) => (modOrString(val, 3) ? 'fizz' : val));
}

function buzz() {
  return map((val: number | string) => (modOrString(val, 5) ? 'buzz' : val));
}

function fizzBuzz() {
  return map((val: number | string) =>
    modOrString(val, 15) ? 'fizzbuzz' : val
  );
}

function modOrString(value: number | string, n: number): boolean {
  return !Number.isNaN(value) && (value as number) % n === 0;
}
