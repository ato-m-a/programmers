export const solution = (input) => {
  const answer = [];
  let current = 0;

  for (const i of input) {
    const [_out, _in] = i.split(' ').map(Number);

    current += _in;
    current -= _out;

    answer.push(current);
  }

  return Math.max(...answer);
}