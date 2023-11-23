import { solution } from '.';

describe('배열 만들기 1', () => {
  const comment = `
    정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
  `;

  test(comment, () => {
    expect(solution(10, 3)).toStrictEqual([3, 6, 9]);
    expect(solution(15, 5)).toStrictEqual([5, 10, 15]);
  });
});