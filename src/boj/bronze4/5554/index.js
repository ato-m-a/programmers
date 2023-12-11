export const solution = (input) => {
  const sum = input.map(Number).reduce((acc, cur) => acc + cur, 0);

  const minutes = Math.floor(sum / 60);
  const seconds = sum % 60;

  return `${minutes}\n${seconds}`;
}