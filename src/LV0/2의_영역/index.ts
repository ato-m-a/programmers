export const solution = (arr: number[]) => {
  const forward = arr.map((v, i) => ({ v, i }));
  const backward = [...forward].reverse();

  const first = forward.find(el => el.v === 2);
  const last = backward.find(el => el.v === 2);

  if (!first || !last) return [-1];

  return arr.slice(first.i, last.i + 1);
}