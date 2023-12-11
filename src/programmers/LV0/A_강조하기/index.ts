export const solution = (myString: string) => {
  return [...myString].map(char => {
    if (char === 'a') return 'A';
    if (char !== 'A' && char === char.toUpperCase()) return char.toLowerCase();
    return char;
  }).join('');
}