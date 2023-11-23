export const solution = (my_string: string, indices: number[]) => {
  return [...my_string].filter((v, i) => !indices.includes(i)).join('');
}