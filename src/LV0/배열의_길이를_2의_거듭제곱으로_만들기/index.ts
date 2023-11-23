const isPowerOfTwo = (n: number) => {
  return (n & (n - 1)) === 0;
}

const nextPowerOfTwo = (n: number) => {
  if (isPowerOfTwo(n)) return n;

  let power = 1;
  while (power < n) {
    power *= 2;
  }
  return power;
}

export const solution = (arr: number[]) => {
  const length = nextPowerOfTwo(arr.length);

  while (arr.length < length) {
    arr.push(0);
  }

  return arr;
}