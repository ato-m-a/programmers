export const solution = (my_string: string, m: number, c: number) => {
  const result = [];
  const rows = Math.ceil(my_string.length / m);

  for (let i = 0; i < rows; i++) {
    const row = new Array(m).fill(0);

    for (let j = 0; j < m; j++) {
      const index = i * m + j;
      if (index < my_string.length) row[j] = my_string[index];
    }

    result.push(row);
  }

  return result.map(row => row[c - 1]).join('');
}