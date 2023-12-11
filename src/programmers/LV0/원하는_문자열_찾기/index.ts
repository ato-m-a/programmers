export const solution = (myString: string, pat: string) => {
  return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}