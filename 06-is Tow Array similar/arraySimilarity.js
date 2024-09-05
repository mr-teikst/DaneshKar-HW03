const isArrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));
// console.log(isArrayEqual([1, 2, 3], [8, 9, 10]));
