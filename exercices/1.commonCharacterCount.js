// Given two strings, find the number of common characters between them.

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

function getCommonCharactersCount(s1, s2) {
    
    let count = 0;

    for(let i = 0; i < s1.length; i++){
        for(j = 0; j < s2.length; j++){
            if(s1[i] === s2[j]){
                count++
                break
            }
            
        }
    }
    return count
}

getCommonCharactersCount("aabcc", "adcaa")