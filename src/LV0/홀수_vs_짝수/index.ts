export const solution = (num_list: number[]) => {
  const even = num_list.filter((v, i) => i % 2 === 0).reduce((acc, cur) => acc += cur, 0);
  const odds = num_list.filter((v, i) => i % 2 !== 0).reduce((acc, cur) => acc += cur, 0);

  if (even > odds) return even;
  if (even < odds) return odds;
  return even;
}