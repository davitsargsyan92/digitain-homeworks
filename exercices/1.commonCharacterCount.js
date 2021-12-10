// Given two strings, find the number of common characters between them.

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

function getCommonCharactersCount(s1, s2) {
    var ob1 = {};
    var count = 0;

    for (let i = 0; i < s1.length; i++) {
        if(s1[i] in ob1){
            ob1[s1[i]]++;
        }else{
            ob1[s1[i]] = 1;
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if(s2[i] in ob1){
            count++;
            ob1[s2[i]]--;
            if(ob1[s2[i]] === 0){
                delete ob1[s2[i]];
            }
        }
    }
    console.log(count)
}

