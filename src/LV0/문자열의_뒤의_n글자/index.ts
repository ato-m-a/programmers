export const solution = (my_string: string, n: number) => {
  const reversed = [...my_string].reverse();

  return reversed.slice(0, n).reverse().join('');
}