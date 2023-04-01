function isItANum(str) {
  // using Regex to take not wanted strings
  const number = str.replace(/\D/g,'');
  const firstNumber = number[0];
    
  if (number.length == 11 && firstNumber == '0') {
    return number
  } else {
    return "Not a phone number"
   }
  }

console.log(isItANum('efRFS:)0207ERGQREG88349F82!'))
// 02078834982