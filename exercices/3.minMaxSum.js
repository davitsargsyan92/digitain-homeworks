// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// arr = [1,3,5,7, 9]

// The minimum sum is 1+ 3 + 5 + 7  and the maximum sum is 3+5+7+9. The function prints 16 24


function minMaxSum(arr){ // [7, 3, 1, 9, 5]

    let max = arr.reduce((sum, currentValue) => (sum + currentValue), 0) - Math.min(...arr);
    let min = arr.reduce((sum, currentValue) => (sum + currentValue), 0) - Math.max(...arr);

    return (min + " " + max);
}
console.log(minMaxSum([7, 3, 1, 9, 5]));
