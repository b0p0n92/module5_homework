let arr = [1,1,2];
let testVal = arr[0];
let result = true;
for (let i = 1; i < arr.length; i++) {
  if (testVal !== arr[i]) {
    result = false;
    break;
  }
}
console.log(result);