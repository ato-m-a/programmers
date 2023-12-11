export const solution = (my_string: string, s: number, e: number) => {
  const sliced = [...my_string].slice(s, e + 1);

  return my_string.replace(sliced.join(''), [...sliced].reverse().join(''));
}