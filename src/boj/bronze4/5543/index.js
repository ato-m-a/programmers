export const solution = (input) => {
  const burgers = input.slice(0, 3).map(Number);
  const beverages = input.slice(3).map(Number);

  return Math.min(...burgers) + Math.min(...beverages) - 50;
}