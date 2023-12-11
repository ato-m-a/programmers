export const solution = (input) => {
  input.shift();

  return input.map((v, i) => `${i + 1}. ${v}`).join('\n');
}