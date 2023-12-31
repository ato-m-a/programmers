import { solution } from '.';

describe('5596번: 시험 점수', () => {
  const comment = `
    대한고등학교에 재학 중인 민국이와 만세는 4과목(정보, 수학, 과학, 영어)에 대한 시험을 봤다. 민국이와 만세가 본 4과목의 점수를 입력하면, 민국이의 총점 S와 만세의 총점 T 중에서 큰 점수를 출력하는 프로그램을 작성하시오. 단, 서로 동점일 때는 민국이의 총점 S를 출력한다.
  `;

  test(comment, () => {
    expect(solution('100 80 70 60\n80 70 80 90'.split('\n'))).toBe(320);
    expect(solution('100 80 70 60\n80 70 60 100'.split('\n'))).toBe(310);
  });
});