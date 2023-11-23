export const solution = (my_string: string, alp: string) => {
  return [...my_string].map(char => {
    if (char === alp) return char.toUpperCase();
    return char;
  }).join('');
}