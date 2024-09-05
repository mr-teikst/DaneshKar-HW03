const maxFinder = (arr) => {
  let max = arr[0];
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
};

// console.log(maxFinder([12, 1, 8, 20, 5]));
