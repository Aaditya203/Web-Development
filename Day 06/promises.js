const fs = require('fs');
function adiReadfile(){
    return new Promise(function (resolve){
        fs.readFile("E:/WebDev/WebDev Codes/day 06/a.txt","utf-8",function(err,data){
            resolve(data);
            console.log("Hii")
        });
    })
}

function resolve(data){
    console.log(data);
}

adiReadfile().then(resolve);