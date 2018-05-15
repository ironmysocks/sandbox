
function parens(str) {
  let parens = [];
  let brackets = [];
  let braces = [];
  for(let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      parens.push("(");
    } else if (str[i] === "[") {
      brackets.push("[");
    } else if (str[i] === "{") {
      braces.push("{");
    } else if (str[i] === ")") {
      if (parens.length === 0) {
        return "open";
      }
      parens.pop();
    } else if (str[i] === "]") {
      if (brackets.length === 0) {
        return "open";
      }
      brackets.pop();
    } else if (str[i] === "}") {
      if (braces.length === 0) {
        return "open";
      }
      braces.pop();
    }
  }
  return parens.length > 0 || brackets.length > 0 || braces.length > 0 ? "open" : "closed";
}

const test1 = "{ [ closed ]}";
const test2 = "]][[]]";
const test3 = "if (arr[mid] > key) {return search((arr, key, l, mid-1);}";
console.log(parens(test1));
console.log(parens(test2));
console.log(parens(test3));
