    // Some people are standing in a row in a park. There are trees between them which cannot be moved.
    // Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
    // People can be very tall!


    //EXAMPLE

    // For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
    // sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]

    function sortByHeight(a) {
        const copyArr = a
        const sortedArr = copyArr.sort() 
        const sortedByHeightArr = []
        for(let i = a.length-1; i >= 0; i--) {
            if(a[i] !== -1) {
                sortedByHeightArr[i] = sortedArr[sortedArr.length - 1]
                sortedArr.pop()
            } else {
                sortedByHeightArr[i] = -1
            }
        }

        return sortedByHeightArr
    }

    