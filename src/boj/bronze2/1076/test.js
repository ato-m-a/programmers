import { solution } from '.';

describe('1076번: 저항', () => {
  test('It should be 4700', () => {
    expect(solution('yellow\nviolet\nred'.split('\n'))).toBe(4700);
  });

  test('It should be 32,000,000', () => {
    expect(solution('orange\nred\nblue'.split('\n'))).toBe(32_000_000);
  });

  test('It should be 99,000,000,000', () => {
    expect(solution('white\nwhite\nwhite'.split('\n'))).toBe(99_000_000_000);
  });
});