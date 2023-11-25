export const solution = (players: string[], callings: string[]) => {
  const answer = [...players];

  const positions = answer.reduce((acc: Record<string, number>, cur, idx) => {
    acc[cur] = idx;
    return acc;
  }, {});

  for (const call of callings) {
    const pos = positions[call];
    const front = answer[pos - 1];

    answer[pos] = front;
    answer[pos - 1] = call;

    positions[call] = pos - 1;
    positions[front] = pos;
  }

  return answer;
}