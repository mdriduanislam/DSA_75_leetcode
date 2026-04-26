
var mergeAlternately = function(word1, word2) {
    let mergedString ='';
    let w1= word1.length;
    let w2 = word2.length;
    let max= Math.max(w1,w2)
    for (let i=0; i<max; i++){
        if(i<w1)
        mergedString+=word1[i];
        if(i<w2)
        mergedString+=word2[i];
    }
    return mergedString;
};
console.log(mergeAlternately("abc","pq"))

