export const solution = (intStrs: string[], k: number, s: number, l: number) => {
  return intStrs.map(value => {
    return parseInt(value.split('').slice(s, s + l).join(''));
  }).filter(value => value > k);
}