export const solution = (s: string) => {
  const answer: number[] = [];
  const visited = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    const find = visited.get(char);

    if (find) answer.push(i - find);
    else answer.push(-1);

    visited.set(char, i);
  }

  return answer;
}