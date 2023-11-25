export const solution = (name: string[], yearning: number[], photo: string[][]) => {
  const scoreMap = new Map<string, number>(name.map((v, i) => [v, yearning[i]]));

  return photo.map(v => {
    return v.reduce((acc, cur) => acc + (scoreMap.get(cur) ?? 0), 0);
  });
}