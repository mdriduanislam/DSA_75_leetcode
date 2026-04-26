
var mergeAlternately = function(word1, word2) {
    let mergedString ='';
    let w1= word1.length;
    let w2 = word2.length;
    let max= Math.max(w1,w2)
    for (let i=0; i<max; i++){
        mergedString+=word1[i];
        mergedString+=word2[i];
    }
    return mergedString;
};
console.log(mergeAlternately("abc","pqr"))//"


let str = "hello";
let reversed = str.split("").reverse().join("");

function reverseString(str) {
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
}

function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}