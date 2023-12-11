export const solution = (n: number, m: number, section: number[]) => {
  let count = 0;

  for (let i = 0; i < section.length;) {
    count++;

    const start = section[i];
    const end = start + m - 1;

    while (i < section.length && section[i] <= end) {
      i++;
    }
  }

  return count;
}