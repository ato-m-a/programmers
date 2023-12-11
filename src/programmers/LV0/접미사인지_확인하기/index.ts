export const solution = (my_string: string, is_suffix: string) => {
  const suffix = [...my_string].map((char, index) => {
    return index ? [...my_string].slice(index).join('') : my_string;
  });

  return suffix.includes(is_suffix) ? 1 : 0;
}