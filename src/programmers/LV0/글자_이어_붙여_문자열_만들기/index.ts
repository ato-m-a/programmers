export const solution = (my_string: string, index_list: number[]) => {
  return index_list.reduce((acc, cur) => {
    return acc += my_string.charAt(cur);
  }, '');
}