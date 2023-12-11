import { solution } from '.';

describe('Lv.0 - 카운트 업', () => {
  const comment = `정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.`;

  test(comment, () => {
    expect(solution(3, 10)).toStrictEqual([3, 4, 5, 6, 7, 8, 9, 10]);
    expect(solution(1, 4)).toStrictEqual([1, 2, 3, 4]);
  });
});