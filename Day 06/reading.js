const fs = require('fs');

function readFile(){
    fs.readFile("E:/WebDev/WebDev Codes/day 06/a.txt",'utf-8',(err,data)=>{
        console.log(data);
    })
}
readFile();
console.log("Hi there");
let a=0;
for(let i=0;i<1000000;i++){
    a=i+1;
}
console.log("After loop");