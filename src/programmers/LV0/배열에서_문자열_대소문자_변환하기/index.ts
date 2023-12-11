export const solution = (strArr: string[]) => {
  return strArr.map((v, i) => {
    if (i % 2 === 0) return v.toLowerCase();
    return v.toUpperCase();
  });
}