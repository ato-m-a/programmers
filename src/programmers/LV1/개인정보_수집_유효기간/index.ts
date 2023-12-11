export const solution = (today: string, terms: string[], privacies: string[]) => {
  const answer = [];

  const termsMap = new Map<string, number>(terms.map(term => {
    const [id, month] = term.split(' ');
    return [id, parseInt(month)];
  }));

  const privaciesMap = new Map<number, string>(privacies.map((privacy, index) => [index + 1, privacy]));

  for (const [key, value] of privaciesMap.entries()) {
    const createdAt = new Date(value.split(' ')[0]);
    const term = termsMap.get(value.split(' ')[1]) as number;

    createdAt.setMonth(createdAt.getMonth() + term);

    if (new Date(today) >= createdAt) answer.push(key);
  }

  answer.sort((a, b) => a - b);
  return answer;
}