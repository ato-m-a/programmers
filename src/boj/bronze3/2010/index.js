export const solution = (input) => {
  const N = parseInt(input.shift());

  return input.reduce((acc, cur) => acc + parseInt(cur), 0) - (N - 1);
}