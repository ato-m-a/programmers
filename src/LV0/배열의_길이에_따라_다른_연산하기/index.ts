export const solution = (arr: number[], n: number) => {
  if (arr.length % 2 !== 0) return arr.map((v, i) => i % 2 === 0 ? v + n : v);
  return arr.map((v, i) => i % 2 !== 0 ? v + n : v);
}