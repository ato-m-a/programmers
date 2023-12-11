const notFoundToInfinity = (num: number) => num === -1 ? Infinity : num;

export const solution = (keymap: string[], targets: string[]) => {
  const pressMap = new Map();
  const keySet = new Set([...keymap.join('')].map(key => key));

  for (const key of keySet) {
    const map = keymap.map((v, i) => notFoundToInfinity([...v].findIndex(k => k === key)));
    map.sort((a, b) => a - b);
    pressMap.set(key, (map[0] + 1));
  }

  const answer = Array.from({ length: targets.length }, () => 0);

  for (let i = 0; i < targets.length; i++) {
    const target = targets[i];

    for (let j = 0; j < target.length; j++) {
      const char = target.charAt(j);
      const press = pressMap.get(char);
      if (typeof press === 'undefined') {
        answer[i] = -1;
        break;
      }
      answer[i] += press;
    }
  }

  return answer;
}