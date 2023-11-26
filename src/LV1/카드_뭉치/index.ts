export const solution = (cards1: string[], cards2: string[], goal: string[]) => {
  let current = 0;

  while (current !== goal.length) {
    if (cards1[0] === goal[current]) {
      cards1.shift();
      current++;
      continue;
    }

    if (cards2[0] === goal[current]) {
      cards2.shift();
      current++;
      continue;
    }

    break;
  }

  return current === goal.length ? 'Yes' : 'No';
}