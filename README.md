Describe: ccValidator()

Test: "It should turn the entered numbers into an array."
Code: 4102080860435620
Expected Output: {4,1,0,2,0,8,0,8,6,0,4,3,5,6,2,0}

Test: "It should double every other number starting on the right."
Code: 4102080860435620
Expected Output: {4,2,0,4,0,16,0,16,6,0,4,6,5,12,2,0}

Test: "If any elements in array are double digits, it should sum the digits in each individual array."
Code: {4,2,0,4,0,16,0,16,6,0,4,6,5,12,2,0}
Expected Output: {4,2,0,4,0,7,0,7,6,0,4,6,5,3,2,0}

Test: "It should sum all of the digits in the new transfogit lormed set of numbers."
Code: {4,2,0,4,0,7,0,7,6,0,4,6,5,3,2,0}
Expected Output: 52

Test: "It should return a 'NOT valid' string if the final digit in the previous sum != 0."
Code: 52
Expected Output: 'NOT valid'

Test: "It should return a 'valid' string if the final digit in the previous sum = 0."
Code: 
Expected Output: 'Valid'