import { solution } from '.';

describe('카운트 다운', () => {
  const comment = `
    정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
  `;

  test(comment, () => {
    expect(solution(10, 3)).toStrictEqual([10, 9, 8, 7, 6, 5, 4, 3]);
  });
});