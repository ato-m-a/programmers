export const solution = (l: number, r: number) => {
  const filtered = Array(r + 1).fill(0).map((_, index) => index).filter(value => {
    return value >= l && /^[50]+$/.test(value.toString());
  });

  if (filtered.length) return filtered;
  return [-1];
}