import { solution } from '.';

describe('n 번째 원소부터', () => {
  const comment = `
    정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.
  `;

  test(comment, () => {
    expect(solution([2, 1, 6], 3)).toStrictEqual([6]);
    expect(solution([5, 2, 1, 7, 5], 2)).toStrictEqual([2, 1, 7, 5]);
  });
});