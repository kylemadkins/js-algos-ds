function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = 0;
  let temp = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log("[1, 2, 5, 2, 8, 1, 5]", "2", maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log("[1, 2, 5, 2, 8, 1, 5]", "4", maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log("[4, 2, 1, 6]", "1", maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log("[4, 2, 1, 6, 2]", "4", maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log("[]", "4", maxSubarraySum([], 4)); // null
