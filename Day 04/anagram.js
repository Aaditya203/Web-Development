/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    const normalize = (str) =>
        str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const s1 = normalize(str1);
    const s2 = normalize(str2);
    if(s1.length != s2.length) return false;

    const count = {};
    for(let char of s1){
        count[char]=(count[char] || 0)+1;
    }
    for(let char of s2){
        if(!count[char]) return false;
        count[char]--;
    }
    return true;

}

console.log(isAnagram("race","race"));
