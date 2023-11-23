import type { Query } from './types';

export const solution = (my_string: string, queries: Query[]) => {
  return queries.reduce((acc, cur) => {
    const [s, e] = cur;

    const splitted = acc.split('');
    const sliced = splitted.slice(s, e + 1).reverse();

    splitted.splice(s, e - s + 1, ...sliced);

    return splitted.join('');
  }, my_string);
}