import type { Str } from './types';

export const solution = (str_list: Str[]) => {
  const findL = str_list.indexOf('l');
  const findR = str_list.indexOf('r');

  if (findL === -1 && findR === -1) return [];

  if (findL !== -1 && (findR === -1 || findL < findR)) {
    if (findL === 0) return [];
    return str_list.slice(0, findL);
  }

  if (findR !== -1 && (findL === -1 || findR < findL)) {
    return str_list.slice(findR + 1);
  }

  return [];
}