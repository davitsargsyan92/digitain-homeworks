// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// arr = [1,3,5,7]

// The minimum sum is 1+ 3 + 5 + 7  and the maximum sum is 3+5+7+9. The function prints 16 24

function minMaxSum(arr) {
  let sum = 0;
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    min = sum - Math.max(...arr);
    max = sum - Math.min(...arr);
  }
  console.log(min, max);
}
console.log(minMaxSum([1, 3, 5, 7, 9]));
