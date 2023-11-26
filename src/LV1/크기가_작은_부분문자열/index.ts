export const solution = (t: string, p: string) => {
  let count = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    const num = parseInt(t.substring(i, i + p.length));

    if (num <= parseInt(p)) count++;
  }

  return count;
}