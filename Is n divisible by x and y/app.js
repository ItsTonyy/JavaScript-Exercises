function isDivisible(n, x, y) {
  const firstDivision = n % x;
  const secondDivision = n % y;
  
  
  if (firstDivision > 0 || secondDivision > 0 ) {
    return false
  } else {
    return true
  }
}

console.log(isDivisible(8, 2, 4));
//true