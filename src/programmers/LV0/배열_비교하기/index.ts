export const solution = (arr1: number[], arr2: number[]) => {
  if (arr1.length !== arr2.length) {
    if (arr1.length > arr2.length) return 1;
    return -1;
  }

  const arr1Reduced = arr1.reduce((acc, cur) => acc + cur, 0);
  const arr2Reduced = arr2.reduce((acc, cur) => acc + cur, 0);

  if (arr1Reduced > arr2Reduced) return 1;
  if (arr1Reduced < arr2Reduced) return -1;
  return 0;
}