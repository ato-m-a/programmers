export const solution = (q: number, r: number, code: string) => {
  return [...code].reduce((accumulator, currentValue, currentIndex) => {
    if (currentIndex % q === r) return accumulator += currentValue;
    return accumulator;
  }, '');
}