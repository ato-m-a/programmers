export const solution = (arr: number[]) => {
  const stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (!stk.length) {
      stk.push(arr.at(i));
      continue;
    }

    if (stk.at(-1) === arr.at(i)) {
      stk.pop();
      continue;
    }

    stk.push(arr.at(i));
  }

  return stk.length ? stk : [-1];
}