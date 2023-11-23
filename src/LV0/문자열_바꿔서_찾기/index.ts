export const solution = (myString: string, pat: string) => {
  const converted = [...myString].map(char => {
    if (char === 'A') return 'B';
    if (char === 'B') return 'A';
    return char;
  }).join('');

  return converted.includes(pat) ? 1 : 0;
}