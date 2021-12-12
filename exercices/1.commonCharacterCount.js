// Given two strings, find the number of common characters between them.

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

function getCommonCharactersCount(s1, s2) {
  let cnt = 0;
  let str1 = s1.split("");
  let str2 = s2.split("");
  for (let i = 0; i < str1.length; i++) {
    let ind = str2.indexOf(str1[i]);
    if (ind !== -1) {
      str2.splice(ind, 1);
      cnt++;
    }
  }

  return cnt;
}
console.log(getCommonCharactersCount("sgfhshgj", "fddfhgf"));
