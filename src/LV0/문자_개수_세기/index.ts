export const solution = (my_string: string) => {
  const upperCases = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
  const lowerCases = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));

  return [...upperCases.concat(lowerCases)].map(char => [...my_string].filter(str => str === char).length);
}