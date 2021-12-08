// Given two strings, find the number of common characters between them.

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

function getCommonCharactersCount(s1, s2) {
    let count = 0;
    s1 = s1.split("");
    s2 = s2.split("");

    s1.forEach(item => {
        if(s2.includes(item)){
            count++;
            s2.splice(s2.indexOf(item), 1)
        }
    });
    return count;
}
console.log(getCommonCharactersCount("aabcc", "adcaa"))