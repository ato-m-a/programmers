export const solution = (start_num: number, end_num: number) => {
  return Array.from({ length: end_num - start_num + 1 }, (_, index) => index + start_num);
}