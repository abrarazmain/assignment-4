/*
--------------------- Problem 1 -------------------------
The function will take a number as parameter.And first multiplicate the number by 3,then add 10 with the value..Then  divide the value by 2 and subtract 5.Then will return the final output
*/
function mindGame(number) {
  if (typeof number !== "number" || number < 0) {
    return "please inter a valid and positive number";
  } else {
    const multi = number * 3;
    const add = multi + 10;
    const divide = add / 2;
    const finalResult = divide - 5;
    return finalResult;
  }
}


/*
---------------------- Problem 2 ------------------------
The function will take a string as parameter and will return Even or Odd,depending on the number of characters on string.If the number of characters on string is Even number,it will return even.Otherwise it will return Odd
*/
function evenOdd(string) {
  if (typeof string !== "string") {
    return "please use string as parameter ";
  } else if (string.length % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}


/*
---------------------- Problem 3 ------------------------
The function will take a number as parameter and will subtract the number by 7.If the value is less than seven,the function will return the value.Otherwise it will return the parameter number by doubling it
*/
function isLGSeven(number) {
  const subtractBySeven = number - 7;
  if (typeof number !== "number") {
    return "please inter a number as parameter";
  } else if (subtractBySeven < 7) {
    return subtractBySeven;
  } else {
    return number * 2;
  }
}

/*
---------------------- Problem 4 ------------------------
The function will take an array as parameter.the array will contain some numbers which can be positive or negative number.The positive number will be called as 'Good Data' and the negative one as 'Bad Data'.Now the function will calculate and return the amount of bad data the array contains.
*/
function findingBadData(array) {
  let badDataCount = 0;

  if (Array.isArray(array) !== true) {
    return "You have to declare an array as parameter";
  }

  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (typeof element !== "number") {
      return "only number is allowed inside the array";
    } else if (element < 0) {
      badDataCount++;
    }
  }

  if (badDataCount === 0) {
    return "No bad data found";
  } else {
    return badDataCount;
  }
}




/*
---------------------- Problem 5 ------------------------
The function will take take three parameter as the the number of games of three friends.first friend can make 21 diamond , second friend can make 32 diamond and third friend can make 43 diamond from one gems.At first, the function will convert all the gems intu diamond.If the total diamond amount is more than 2000,the function will return the diamond amount by subtracting 2000.otherwise it will return total diamond amount.
*/
//
function gemsToDiamond(gem1, gem2, gem3) {
  const gem1Power = 21;
  const gem2Power = 32;
  const gem3Power = 43;
  const firstFriendDiamond = gem1 * gem1Power;
  const secondFriendDiamond = gem2 * gem2Power;
  const thirdFriendDiamond = gem3 * gem3Power;
  const totalFriendDiamond =
    firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;

  if (
    typeof gem1 !== "number" ||
    typeof gem2 !== "number" ||
    typeof gem3 !== "number"
  ) {
    return "please inter three parameter and valid number";
  } else if (gem1 < 0 || gem2 < 0 || gem3 < 0) {
    return "gem amount cannot be less than zero";
  } else if (totalFriendDiamond > 2000) {
    return totalFriendDiamond - 2000;
  } else {
    return totalFriendDiamond;
  }
}
