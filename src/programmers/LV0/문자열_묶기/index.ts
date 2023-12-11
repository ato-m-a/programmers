export const solution = (strArr: string[]) => {
  const lengthCounts = strArr.reduce((acc: Record<number, number>, cur) => {
    return { ...acc, [cur.length]: (acc[cur.length] ?? 0) + 1 };
  }, {});

  let maxGroupSize = 0;

  for (const length in lengthCounts) {
    maxGroupSize = Math.max(maxGroupSize, lengthCounts[length]);
  }

  return maxGroupSize;
}