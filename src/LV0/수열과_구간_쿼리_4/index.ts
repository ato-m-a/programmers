import type { Query } from './types';

export const solution = (arr: number[], queries: Query[]) => {
  return queries.reduce((accumulator, currentValue) => {
    const [s, e, k] = currentValue;

    return accumulator.map((value, index) => {
      if (index >= s && index <= e && index % k === 0) return value + 1;
      return value;
    });
  }, [...arr]);
}