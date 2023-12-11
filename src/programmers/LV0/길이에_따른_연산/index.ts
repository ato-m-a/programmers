export const solution = (num_list: number[]) => {
  if (num_list.length >= 11) return num_list.reduce((acc, cur) => acc + cur, 0);
  return num_list.reduce((acc, cur) => acc * cur, 1);
}