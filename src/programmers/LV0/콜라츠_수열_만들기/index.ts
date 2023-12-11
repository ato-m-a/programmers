export const solution = (n: number) => {
  let sequence: number[] = [];

  while (n !== 1) {
    sequence.push(n);

    if (n % 2 === 0) n = n / 2;
    else n = 3 * n + 1;
  }

  sequence.push(1);

  return sequence;
}