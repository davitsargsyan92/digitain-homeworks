// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
//  Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// arr = [1,3,5,7]

// The minimum sum is 1+ 3 + 5 + 7  and the maximum sum is 3+5+7+9. The function prints 16 24

let arr = [9, 5, 3, 1, 7]
function minMaxSum(arr){

    let arr2 = arr.sort((a, b) => a - b);
    let min = 0
    let max = 0

    for(let i = 0; i < arr2.length - 1; i++){
min = min + arr2[i]
    }

    for(let j = 1; j < arr2.length; j++){
        max = max + arr2[j]
            }
return min + " " + max
}

minMaxSum(arr)