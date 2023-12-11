export const solution = (park: string[], routes: string[]) => {
  let [x, y]: [number, number] = [0, 0];

  const coordinate = park.map((v, yIndex) => {
    return [...v].map((char, xIndex) => {
      if (char === 'S') {
        x = xIndex;
        y = yIndex;
      }
      return char;
    });
  });

  const xLimit = park[0].length - 1;
  const yLimit = park.length - 1;

  for (const route of routes) {
    const splitted = route.split(' ') as [string, string];
    const direction = splitted[0];
    const amount: number = parseInt(splitted[1]);

    let paths: string[] = [];

    switch (direction) {
      case 'E':
        if (x + amount > xLimit) continue;
        paths = coordinate[y].filter((v, i) => {
          return i > x && i <= (x + amount);
        });
        if (paths.includes('X')) continue;
        x += amount;
        break;
      case 'W':
        if (x - amount < 0) continue;
        paths = coordinate[y].filter((v, i) => {
          return i < x && i >= (x - amount);
        });
        if (paths.includes('X')) continue;
        x -= amount;
        break;
      case 'S':
        if (y + amount > yLimit) continue;
        paths = park.map(v => v[x]).filter((v, i) => {
          return i > y && i <= (y + amount);
        });
        if (paths.includes('X')) continue;
        y += amount;
        break;
      case 'N':
        if (y - amount < 0) continue;
        paths = park.map(v => v[x]).filter((v, i) => {
          return i < y && i >= (y - amount);
        });
        if (paths.includes('X')) continue;
        y -= amount;
    }
  }

  return [x, y].reverse();
}