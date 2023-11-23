export const solution = (a: number) => {
  return (b: number) => {
    return (c: number) => {
      return (d: number) => {
        const dice = [a, b, c, d];
        const uniqueDice = new Set(dice);
        const frequency = dice.reduce((acc: Record<number, number>, cur) => {
          acc[cur] = (acc[cur] ?? 0) + 1;
          return acc;
        }, {});

        // 모두 같은 숫자일 때
        if (uniqueDice.size === 1) {
          return 1111 * a;
        }

        // 세 개의 숫자가 같거나, 두 개의 같은 값이 나왔을 때
        if (uniqueDice.size === 2) {
          const p = dice.find(v => frequency[v] === 3) as number;

          if (p) {
            const q = dice.find(v => frequency[v] === 1) as number;
            return Math.pow((10 * p + q), 2);
          } else {
            const [a, b] = uniqueDice;
            return (a + b) * Math.abs(a - b);
          }
        }

        // 두 주사위가 같을 때
        if (uniqueDice.size === 3) {
          const p = dice.find(v => frequency[v] === 2);
          const [q, r] = dice.filter(v => v !== p);

          return q * r;
        }

        return Math.min(...dice);
      }
    }
  }
}