export const solution = (arr: number[]) => {
  return arr.reduce((acc: number[], cur) => {
    return [...acc, ...Array(cur).fill(cur)];
  }, []);
}