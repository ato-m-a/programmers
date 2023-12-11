import type { Slicer } from './types';

export const solution = (n: number, slicer: Slicer, num_list: number[]) => {
  const [a, b, c] = slicer;

  if (n === 1) return num_list.slice(0, b + 1);

  if (n === 2) return num_list.slice(a);

  if (n === 3) return num_list.slice(a, b + 1);

  return num_list.slice(a, b + 1).filter((v, i) => i % c === 0);
}