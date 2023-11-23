export const solution = (num_list: number[], n: number) => {
  return num_list.filter((v, i) => i % n === 0);
}