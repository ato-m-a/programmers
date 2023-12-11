export const solution = (my_string: string) => {
  return [...my_string].map((char, index) => {
    return index ? [...my_string].slice(index).join('') : my_string;
  }).sort();
}