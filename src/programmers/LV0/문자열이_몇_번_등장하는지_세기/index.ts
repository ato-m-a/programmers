export const solution = (myString: string, pat: string) => {
  let count = 0;
  let position = 0;

  while (true) {
    position = myString.indexOf(pat, position);
    if (position !== -1) {
      count++;
      position += 1;
    }
    else break;
  }

  return count;
}