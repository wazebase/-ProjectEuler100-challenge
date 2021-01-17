/* Project Euler: Problem 5: Smallest multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/
function smallestMult(n) {
 let anwser = 1 ;
  let numArr = [];
  let count = n;  
  for(let i = 0; i < n;i++) {
    numArr.push(count);
    count -= 1;
  }
  let primeFactors = findPrimeFactors(numArr);
  let totalMultiplyList = {};
 primeFactors.forEach(arr=> {
   let multiplyList = {};
   arr.forEach((num,i)=> {
     if(multiplyList.hasOwnProperty(num)) {
       multiplyList[num] += 1;
     }
     else {
       multiplyList[num] = 1;
     }
   
   })
   let multiplies = Object.keys(multiplyList);
   for(let i = 0; i < multiplies.length; i++) {
     let newFactor = multiplies[i];
     if(!totalMultiplyList.hasOwnProperty(newFactor)|| totalMultiplyList[newFactor]<multiplyList[newFactor]) {
       totalMultiplyList[newFactor] = multiplyList[newFactor];
     }
   }
 });
 Object.keys(totalMultiplyList).forEach(multiply=> {
 anwser *= Math.pow(multiply, totalMultiplyList[multiply]);
 })
 return anwser;
}
function findPrimeFactors(arr) {
let primeArr = [];
arr.forEach(num=> {
  let sequenceArr = [];
  let newNum = num;
  for(let div = 2;newNum !== 1;) {
    if(Number.isInteger(newNum/div)){
      sequenceArr.push(div);
      newNum = newNum/div;
    }
    else {
      div += 1;
    }
  }
  primeArr.push(sequenceArr);
})
return primeArr;
}
console.log(smallestMult(20));
