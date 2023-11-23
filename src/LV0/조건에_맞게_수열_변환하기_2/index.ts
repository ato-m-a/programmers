export const solution = (arr: number[]) => {
  const map = (memo: number[], iteration: number): number | void => {
    const mapped = memo.map(v => {
      if (v >= 50 && v % 2 === 0) return v / 2;
      if (v < 50 && v % 2 !== 0) return v * 2 + 1;
      return v;
    });

    if (mapped.every((v, i) => v === memo[i])) return iteration;
    return map(mapped, iteration + 1);
  }

  return map(arr, 0);
}