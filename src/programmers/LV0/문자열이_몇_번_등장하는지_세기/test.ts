import { solution } from '.';

describe('문자열이 몇 번 등장하는지 세기', () => {
  const comment = `
    문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.
  `;

  test(comment, () => {
    expect(solution('banana', 'ana')).toBe(2);
    expect(solution('aaaa', 'aa')).toBe(3);
  });
});