import type { Queries, Query } from './types';

export default function solution<T>(arr: T[], queries: Queries) {  
  return queries.reduce((accumulator: T[], currentValue: Query) => {
    const [i, j] = currentValue;

    const departure = accumulator[i];
    const arrival = accumulator[j];

    return accumulator.map((value, index) => {
      if (index === i) return arrival;
      if (index === j) return departure;
      return value;
    });
  }, [...arr]);
}