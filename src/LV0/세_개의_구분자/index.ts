export const solution = (myStr: string) => {
  const splitted = myStr.split(/[abc]/).filter(char => char.length > 0);

  return splitted.length > 0 ? splitted : ['EMPTY'];
}