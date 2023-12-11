import type { Number } from './types';

export const solution = (arr: Number[], idx: number) => arr.findIndex((v, i) => v === 1 && i >= idx);