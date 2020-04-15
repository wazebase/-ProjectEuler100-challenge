function largestPrimeFactor(number) {
  const arr = [];
  for(let i = 1; i <= number; i ++) {
    if(number % i == 0){
      arr.push(i);
      number /= i;
    }
  }
let largestNum = arr.reduce((x,y) => x > y? x:y);
  return largestNum;

}

/*
Project Euler: Problem 3: Largest prime factorPassed
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/
