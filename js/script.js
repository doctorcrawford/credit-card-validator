// Business Logic

function ccValidator(ccNumber) {
  const ccArray = ccNumber.toString().split("").map(Number);

  for (let i = ccArray.length -1; i >=0; i -= 2) {
    ccArray[i] = ccArray[i] * 2;
    if (ccArray[i] >9) {
      const twoDigits = ccArray[i].toString().split("").map(Number);
      const sum = twoDigits[0] + twoDigits[1];
      ccArray[i] = sum;
    }
  } 

  let sumTotal = 0;
  for (let i = 0; i < ccArray.length; i++) {
    sumTotal = sumTotal + ccArray[i];
  }
  
  const sumArray = sumTotal.toString(). split("").map(Number);
  if (sumArray[sumArray.length - 1] === 0) {
    return 'This credit card is valid!';
  } else {
    return 'This credit card is not valid :(';
  }

}