var reverseVowels = function(s) {
let arr = s.split('');
let left = 0;
let right = arr.length - 1;
let vowels = "aeiouAEIOU";
while (left < right) {
        if (!vowels.includes(arr[left])) {
            left++;
        } 
        else if (!vowels.includes(arr[right])) {
            right--;
        } 
        else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
};