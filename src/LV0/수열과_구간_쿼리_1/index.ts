import type { Query } from './types';

export const solution = (arr: number[], queries: Query[]) => {
  const answer = [...arr];

  for (const query of queries) {
    const [s, e] = query;
    const indexArray = Array.from({ length: e - s + 1 }, (_, i) => i + s);

    for (const index of indexArray) {
      answer[index]++;
    }
  }

  return answer;
}