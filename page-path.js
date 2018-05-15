/*

Three Page Path
-----------------

The input files (input.txt and input2.txt) represent simplified access logs.
The first column is a timestamp. The second column is a customer ID. The third
column is a page ID. Files are always ordered by timestamp.

Given a file like this, calculate the most most common 3 page path through the
site. This path is across users. Users can visit a path multiple times. When
they visit more than three pages, you'll consider each consective pages of 3 as
a separate path: meaning, if they visit pages 1 - 4, there's 2 paths, 1-2-3 &
2-3-4.

*/

const data = [
  [1,1,1],
  [2,2,2],
  [3,3,3],
  [4,2,1],
  [5,2,3],
  [6,2,2],
  [7,1,3],
  [8,1,2],
  [9,3,1],
  [10,2,1],
  [11,2,3],
  [12,2,2],
  [13,1,1],
  [14,1,3],
  [15,1,2]
];
const custVisits = [];

data.forEach( (d) => {
  if (!custVisits[d[1]]) {
    custVisits[d[1]] = [];
  }
  custVisits[d[1]].push(d[2]);
});

const paths = [];
custVisits.forEach( (cv) => {
  if (cv && cv.length >= 3) {
    let count = 0;
    let a;
    while (count <= cv.length - 3) {
      a = cv.slice(count, count + 3);
      paths.push(a);
      count++;
    }
  }
});

const counts = [];
let str;
paths.forEach( (p) => {
  str = p.join(".");
  if (!counts[str]) {
    counts[str] = 0;
  }
  counts[str]++;
});

const max = Math.max(Object.values(counts));
const popularPath = counts.filter( (v, k) => {
  if (v === 4) {
    return k;
  }
});

console.log(max);
console.log(popularPath);
