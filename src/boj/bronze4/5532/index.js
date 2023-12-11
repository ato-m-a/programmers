export const solution = (input) => {
  const [L, A, B, C, D] = input.map(Number);

  return L - Math.max(Math.ceil(A / C), Math.ceil(B / D));
}