// Given a sorted array with possible duplicate elements.
// Find number of occurrences of input ‘key’ in log N time.

function search(arr, key, l, r) {

  if (r >= 1) {
    const mid = l + Math.floor((r - 1)/ 2);
    if (arr[mid] === key) {
      return mid;
    }
    if (arr[mid] > key) {
      return search(arr, key, l, mid-1);
    }
    return search(arr, key, mid+1, r);

  } else {
    return -1;
  }
}

const find = 16;
const arr = [ 2,5,8,16,16,16,16,23,38,56,72,72,72,91,100,233 ];
const result = search(arr, find, 0, arr.length - 1);
if (result <= 0) {
  console.log("Didn't find it");
} else {
  let count = 0;
  let i = result;
  while(arr[i] === find) {
    console.log("found it at index " + i);
    count++
    i++;
  }
  i = result - 1;
  while(arr[i] === find) {
    console.log("found it at index " + i);
    count++
    i--;
  }
  console.log(count + " occurrences");
}
