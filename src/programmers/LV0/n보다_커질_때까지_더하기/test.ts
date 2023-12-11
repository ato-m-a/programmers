import { solution } from '.';

describe('n보다 커질 때까지 더하기', () => {
  const comment = `
    정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.
  `;

  test(comment, () => {
    expect(solution([34, 5, 71, 29, 100, 34], 123)).toBe(139);
    expect(solution([58, 44, 27, 10, 100], 139)).toBe(239);
    expect(solution([1, 2, 3, 4, 5], 0)).toBe(1);
  });
});