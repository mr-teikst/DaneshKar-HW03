const palindrome = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  if (str === result) return true;
  else return false;
};

// console.log(palindrome("racecar"));
// console.log(palindrome("dsdslfdf"));
