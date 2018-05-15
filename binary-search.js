
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

const arr = [ 2,5,8,12,16,23,38,56,72,91,100,233,234,252 ];
const result = search(arr,5,0,arr.length-1);
if (result > 0) {
  console.log("Found it at index " + result);
} else {
  console.log("Didn't find it");
}
