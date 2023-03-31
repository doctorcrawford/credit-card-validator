// Utility Logic

/** converts numbers to a string, splits them, then maps them to an array back as numbers */
function stringToNumberArray(numbers) {
  let output = numbers.toString().split("").map(Number);
  return output;
}


// Business Logic

function ccValidator(ccNumber) {
  let ccArray = stringToNumberArray(ccNumber);

  for (let i = ccArray.length -1; i >=0; i -= 2) {
    ccArray[i] = ccArray[i] * 2;
    if (ccArray[i] >9) {
      const twoDigits = stringToNumberArray(ccArray[i]);
      const sum = twoDigits[0] + twoDigits[1];
      ccArray[i] = sum;
    }
  } 

  let sumTotal = 0;
  for (let i = 0; i < ccArray.length; i++) {
    sumTotal = sumTotal + ccArray[i];
  }

  /** checks if number ends in 0. returns boolean */
  const isValidCC = sumTotal%10 === 0;
  return isValidCC;
}