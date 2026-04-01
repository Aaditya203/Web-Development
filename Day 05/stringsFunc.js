function getLength(str){
    console.log("Original String: " + str);
    console.log("String Length: " + str.length);
}

function indexOf(str,target){
    console.log("Original String: " + str);
    console.log("Index target: " + str.indexOf(target));
}

function partOfString(str,start,end){
    console.log("Original String: " + str);
    console.log("Part of String: " + str.slice(start,end)); //here start and end are both indexes
    console.log("Part of String: " + str.substr(start,end));  //start is index to start end is the size 
}

function replacing(str,target,replacement){
    console.log("Original String: "+str);
    console.log("After replacement: " + str.replace(target,replacement));
}

function splitting(str,delimeter){
    console.log(str.split(delimeter));
}

function trimming(str){
    console.log(str.trim());
}
// trimming("           hello     world          ")

const str = "aditya";
console.log(str.toUpperCase());
const str1 = "ADITYA";
console.log(str.toLowerCase());
