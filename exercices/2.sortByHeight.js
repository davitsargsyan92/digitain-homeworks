// Some people are standing in a row in a park. There are trees between them which cannot be moved.
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// People can be very tall!


//EXAMPLE

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]

let arr = [-1, 150, 190, 170, -1, -1, 160, 180]
function sortByHeight(a) {
let people = a.filter((el) => el !== -1);
people.sort((a, b) => b - a);
for(let i = 0; i < a.length; i++){
    if(a[i] !== -1){
        a[i] = people.pop()
    }
}
   return a
}

sortByHeight(arr)








