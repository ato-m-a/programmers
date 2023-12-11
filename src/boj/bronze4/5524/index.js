export const solution = (input) => {
  input.shift();

  return input.map(v => v.toLowerCase()).join('\n');
}