
function insertionSort(arr) {
  for(let i = 1; i<arr.length;i++) {
    let t = i;
    while(t>=1 && arr[t]<arr[t-1]) {
      let s = arr[t-1];
      arr[t-1] = arr[t];
      arr[t] = s;
      t--;
    }
    console.log(arr);
  }
  return arr;
}

const arr = [4,3,2,10,12,6,5,1];
console.log(insertionSort(arr));
