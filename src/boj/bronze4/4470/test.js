import { solution } from '.';

describe('4470번: 줄번호', () => {
  const input = `5\nLionel Cosgrove\nAlice\nColumbus and Tallahassee\nShaun and Ed\nFido`.split('\n');
  const output = `1. Lionel Cosgrove\n2. Alice\n3. Columbus and Tallahassee\n4. Shaun and Ed\n5. Fido`;

  test('텍스트에서 줄을 입력받은 뒤, 줄 번호를 출력하는 프로그램을 작성하시오.', () => {
    expect(solution(input)).toBe(output);
  });
});