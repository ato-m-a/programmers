export const solution = (arr: number[], k: number) => {
  const uniqueSet = new Set();

  for (const num of arr) {
    uniqueSet.add(num);
    if (uniqueSet.size === k) break;
  }

  const answer = Array.from(uniqueSet);

  while (answer.length < k) {
    answer.push(-1);
  }

  return answer;
}