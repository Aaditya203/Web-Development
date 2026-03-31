/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const s1 = str.toLowerCase();
    let count = 0;
    for(let ch of s1){
        if(['a','e','i','o','u'].includes(ch)){
            count++;
        }
    }
    return count;
}

console.log(countVowels("adsada5e8"));