import { solution } from '.';

describe('2010번: 플러그', () => {
  const comment = '선영이의 집에는 콘센트를 꽂을 수 있는 플러그가 하나밖에 없다. 선영이는 많은 컴퓨터를 가지고 있는데, 컴퓨터의 전원 문제는 어떻게 해결하는 것일까?\n하나의 플러그가 있고, N개의 멀티탭이 있다. 각 멀티탭은 몇 개의 플러그로 이루어져 있다고 한다. 최대 몇 대의 컴퓨터를 전원에 연결할 수 있을까?';

  test(comment, () => {
    expect(solution('3\n1\n1\n1'.split('\n'))).toBe(1);
    expect(solution('2\n5\n8'.split('\n'))).toBe(12);
  });
});