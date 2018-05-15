
function findPairs(min, max, sum) {
  if (max < min || sum > max + min) {
    return "Error in the input";
  }
  const pairs = [];
  max = sum - min;
  while (min < max) {
    if (min + max === sum) {
      pairs.push([min, max]);
    }
    min++;
    max--;
  }
  return pairs;
}

const min = 1;
const max = 99;
const sum = 30;
console.log(findPairs(min, max, sum));
