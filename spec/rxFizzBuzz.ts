import { iif, Observable, of, mergeMap } from 'rxjs';

export function fizzBuzz(): (
  source: Observable<number>
) => Observable<number | string> {
  return function (source: Observable<number>) {
    return source.pipe(
      mergeMap((val) => iif(() => modN(val, 3), fizz(source), buzz(source)))
    );
  };
}

function fizz(source: Observable<number>): Observable<string> {
  return source.pipe(
    mergeMap((val) => iif(() => this.modN(val, 5), of('fizzbuzz'), of('fizz')))
  );
}

function buzz(source: Observable<number>): Observable<number | string> {
  return source.pipe(
    mergeMap((val) => iif(() => modN(val, 5), of('buzz'), of(val)))
  );
}

function modN(int: number, n: number): boolean {
  return int % n === 0;
}
