function sumSquareDifference(n) {
let arr = [];
let count = n;
  for(let i = 0; i < n;i++) {
    arr.push(count);
    count -= 1;
  }
  let squareSum = 0
let sum = arr.reduce((acc,num)=> acc+num);
arr.forEach(num=> squareSum += Math.pow(num,2));

return Math.pow(sum,2) - squareSum;
}

console.log(sumSquareDifference(10));
