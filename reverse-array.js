function reverseArray(arr) {
  let i = Math.floor(arr.length/2) - 1;
  let j = arr.length % 2 === 1 ? i + 2 : i + 1;
  let t;
  while (i >= 0) {
    t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
    i--;
    j++;
  }
  return arr;
}

function reverseArrayQueue(arr) {
  let i = arr.length - 1;
  const reversed = [];
  while (i >= 0) {
    reversed.push(arr[i]);
    i--;
  }
  return reversed;
}

let arr = [4,3,2,10,12,6,5,1];
console.log(arr);
console.log(reverseArray(arr));
console.log(reverseArrayQueue(arr));
