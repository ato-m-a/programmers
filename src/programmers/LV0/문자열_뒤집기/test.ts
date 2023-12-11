import { solution } from '.';

describe('문자열 뒤집기', () => {
  const comment = `
    문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
  `;

  test(comment, () => {
    expect(solution('Progra21Sremm3', 6, 12)).toBe('ProgrammerS123');
    expect(solution('Stanley1yelnatS', 4, 10)).toBe('Stanley1yelnatS');
  });
});