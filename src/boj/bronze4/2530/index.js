export const solution = (input) => {
  const cookTime = parseInt(input.pop());
  let [hours, minutes, seconds] = input.at(0).split(' ').map(Number);
  
  seconds += cookTime;
  minutes += Math.floor(seconds / 60);
  seconds %= 60;
  hours += Math.floor(minutes / 60);
  minutes %= 60;
  hours %= 24;

  return `${hours} ${minutes} ${seconds}`;
}