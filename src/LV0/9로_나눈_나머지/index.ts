export const solution = (number: string) => {
  const reduced = number.split('').reduce((acc, cur) => {
    return acc += parseInt(cur);
  }, 0);

  return reduced % 9;
}