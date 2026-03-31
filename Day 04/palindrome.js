/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    let l = 0, h = str.length-1;
    while(l<h){
        if(str[l].toLowerCase() != str[h].toLowerCase()){
            return false;
        }
        l++,h--;
    }
    return true;
}

console.log(isPalindrome("1racecar1"));