// Given two strings, find the number of common characters between them.

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

function getCommonCharactersCount(s1, s2) {
    let count = 0;
    let string1 = s1.split("");
    let string2 = s2.split("");
    for(let i = 0; i < string1.length; i++){
        for(let j = 0; j < string2.length; j++){
            if(string1[i] == string2[j]){
                count++
                string2.splice(j, 1)
                break;
            }
        }
    }
    console.log(count)
}

let s1 = "aabcc";
let s2 = "adcaa";

getCommonCharactersCount(s1, s2)
