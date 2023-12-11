export const solution = (n: number, k: number) => {
  return Array.from({ length: n }, (_, i) => i + 1).filter(v => v % k === 0);
}