export const solution = (wallpaper: string[]) => {
  let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;

  wallpaper.forEach((row, y) => {
    [...row].forEach((char, x) => {
      if (char === '#') {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    });
  });

  return [minY, minX, maxY + 1, maxX + 1];
}