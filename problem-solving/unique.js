function countUniqueValues(arr) {
  if (arr.length < 1) {
    return 0;
  }
  let current = arr[0];
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (current !== arr[i]) {
      current = arr[i];
      count++;
    }
  }
  return count;
}

// Instructor gives an example of using multiple pointers to
// modify the array as you go, but that's unnecessary

console.log("[1, 1, 1, 1, 1, 2]", countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log("[1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]", countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log("[]", countUniqueValues([])); // 0
console.log("[-2, -1, -1, 0, 1]", countUniqueValues([-2, -1, -1, 0, 1])); // 4
