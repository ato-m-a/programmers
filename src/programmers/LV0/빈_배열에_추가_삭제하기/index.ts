export const solution = (arr: number[], flag: boolean[]) => {
  return flag.reduce((acc: number[], cur, idx) => {
    if (cur) return [...acc, ...Array(arr[idx] * 2).fill(arr[idx])];
    return [...acc.slice(0, acc.length - arr[idx])];
  }, []);
}