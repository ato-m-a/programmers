import { solution } from '.';

describe('n개 간격의 원소들', () => {
  const comment = `
    정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
  `;

  test(comment, () => {
    expect(solution([4, 2, 6, 1, 7, 6], 2)).toStrictEqual([4, 6, 7]);
    expect(solution([4, 2, 6, 1, 7, 6], 4)).toStrictEqual([4, 7]);
  });
});