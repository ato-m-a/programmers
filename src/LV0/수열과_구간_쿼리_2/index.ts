import type { Query } from './types';

export const solution = (arr: number[], queries: Query[]) => {
  return queries.map(query => {
    const [s, e, k] = query;

    const filtered = arr.filter((value, index) => {
      return value > k && index >= s && index <= e;
    });

    if (!filtered.length) return -1;

    return Math.min(...filtered);
  });
}