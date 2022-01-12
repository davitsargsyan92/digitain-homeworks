// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//
// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = 1 + 5 + 7 + 9. The right to left diagonal = 3 + 5 + 7 + 9 = 17 Their absolute difference is |15 - 17| = 2

// Function description
//
// Complete the  diagonalDifference function in the editor below.
//
//     diagonalDifference takes the following parameter:
//
//     int arr[n][m]: an array of integers
// Return
//
// int: the absolute diagonal difference

// Constraints
    // * -100 <= arr[i][j] <= 100

// Output Format


function diagonalDifference(arr) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    for (let i = 0, j = 0; i < arr.length; i++, j++){
            leftDiagonal  += arr[i][j];
            rightDiagonal += arr[i][arr.length-1-j]; 
    }
    return (Math.abs(leftDiagonal - rightDiagonal));
}

module.exports = diagonalDifference