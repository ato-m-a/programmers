export const solution = (todo_list: string[], finished: boolean[]) => {
  return finished.reduce((accumulator: string[], currentValue, currentIndex) => {
    if (!currentValue) return [...accumulator, todo_list[currentIndex]];
    return accumulator;
  }, []);
}