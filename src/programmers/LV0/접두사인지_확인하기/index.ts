export const solution = (my_string: string, is_prefix: string) => {
  const prefix = [...my_string].map((char, index) => {
    return [...my_string].slice(0, index + 1).join('');
  });

  return prefix.includes(is_prefix) ? 1 : 0;
}