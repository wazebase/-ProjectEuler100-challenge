function largestPalindromeProduct(n) {
  let result = 0;
  var fix = 0;
  let x = new Array(n);
  let y = x.fill(9).join("");
  let z = y;
  if (n == 3) {
  fix = /(\d\d\d)/g;
  }
  else if (n == 2) {
  fix = /(\d\d)/g;
  }

while (result == 0) {
  let multiple = new String(z*y).match(fix);

  if (multiple[0] == multiple[1].split('').reverse().join('')) {
    result = y*z;
  }
  z -= 1;
  if (z + 99 < y) {
    y -= 1;
    z = y;
  }
 }
 

  return result;
}

console.log(largestPalindromeProduct(3));
