import { solution } from '.';

describe('x 사이의 개수', () => {
  const comment = `
    문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
  `;

  test(comment, () => {
    expect(solution('oxooxoxxox')).toStrictEqual([1, 2, 1, 0, 1, 0]);
    expect(solution('xabcxdefxghi')).toStrictEqual([0, 3, 3, 3]);
  });
});