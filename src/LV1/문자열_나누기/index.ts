export const solution = (s: string) => {
  const answer = [];

  let i = 0;
  let currentChar: string | null = null;
  let currentCount = 0;
  let otherCount = 0;

  while (s.length > 0) {
    const char = s.charAt(i);

    if (currentChar === null) currentChar = char;

    if (char === currentChar) currentCount++;
    else otherCount++;

    if (currentCount === otherCount) {
      answer.push(s.substring(0, i + 1));
      s = s.substring(i + 1);
      i = 0;
      currentChar = null;
      currentCount = 0;
      otherCount = 0;
      continue;
    }

    i++;
  }

  return answer.length;
}