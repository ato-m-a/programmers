export const solution = (start: number, end_num: number) => {
  return Array.from({ length: start - end_num + 1 }, (_, i) => i + end_num).reverse();
}