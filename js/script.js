// Business Logic

function ccValidator(ccNumber) {
  const ccArray = ccNumber.toString().split("").map(Number);
  console.log(ccArray);
  let ccArrayDoubled = [];

  for (let i = 0; i < ccArray.length; i ++) {
    if (i%2 !== 0) {
      ccArrayDoubled.push(ccArray[i] * 2);
    } else {
      ccArrayDoubled.push(ccArray[i]);
    }
  } 
 
  let ccArrayDubs = [];

  for (let i = 0; i < ccArray.length; i ++) {
    if (ccArrayDoubled[i] > 9) {
      
    }
  }
  

}