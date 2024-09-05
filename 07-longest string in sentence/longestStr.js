const findBiggest = (str) => {
  let words = str.split(" ");
  let maxWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > maxWord.length) {
      maxWord = words[i];
    }
  }
  return maxWord;
};

// console.log(
//   findBiggest("Lorem ipsum dolor sit amet consectetur adipisicing elit")
// );
