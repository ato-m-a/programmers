import type { Part } from './types';

export const solution = (my_strings: string[], parts: Part[]) => {
  return parts.reduce((acc, cur, idx) => {
    const [s, e] = cur;

    return acc += [...my_strings[idx]].slice(s, e + 1).join('');
  }, '');
}