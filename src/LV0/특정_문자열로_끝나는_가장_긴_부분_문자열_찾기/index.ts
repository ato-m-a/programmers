export const solution = (myString: string, pat: string) => {
  let indexes = [];
  let index = myString.indexOf(pat);

  while (index !== -1) {
    indexes.push(index);
    index = myString.indexOf(pat, index + 1);
  }

  return myString.slice(0, indexes[indexes.length - 1] + pat.length);
}