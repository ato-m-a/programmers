import { Interval } from './types';

export const solution = (arr: number[], intervals: Interval[]) => {
  return intervals.reduce((accumulator: number[], currentValue) => {
    const [a, b] = currentValue;

    return [...accumulator, ...arr.slice(a, b + 1)];
  }, []);
}