export const solution = (input) => {
  const colors = {
    black: { val: '0', mul: 1 },
    brown: { val: '1', mul: 10 },
    red: { val: '2', mul: 100 },
    orange: { val: '3', mul: 1_000 },
    yellow: { val: '4', mul: 10_000 },
    green: { val: '5', mul: 100_000 },
    blue: { val: '6', mul: 1_000_000 },
    violet: { val: '7', mul: 10_000_000 },
    grey: { val: '8', mul: 100_000_000 },
    white: { val: '9', mul: 1_000_000_000 },
  }

  const mul = colors[input.pop()].mul;
  const vals = input.map(color => colors[color].val).join('');

  return parseInt(vals) * mul;
}