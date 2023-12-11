export const solution = (arr: number[]) => {
  let stk: number[] = [];

  for (let i = 0; i < arr.length;) {
    if (!stk.length) {
      stk.push(arr[i]);
      i++;
      continue;
    }

    if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
      continue;
    }

    if (stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    }
  }

  return stk;
}