import { solution } from '.';

describe('리스트 자르기', () => {
  const comment = '올바르게 슬라이싱한 리스트를 return하도록 solution 함수를 완성해주세요.';

  test(comment, () => {
    expect(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([2, 3, 4, 5, 6]);
    expect(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([2, 4, 6]);
  });
});