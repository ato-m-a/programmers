export const solution = (numbers: number[], n: number) => {
  return numbers.reduce((acc, cur, idx, arr) => {
    if (acc > n) {
      arr.splice(1);
      return acc;
    }
    return acc += cur;
  }, 0);
}