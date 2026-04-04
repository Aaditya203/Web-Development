const fs = require('fs');
function appendingData(){
    fs.appendFile("E:/WebDev/WebDev Codes/day 06/a.txt",'\n This is a new sentence inserted in the file!!',(err)=>{
        if(err){
            console.log("Error occured: ",err);
        }
        else{
            console.log("Success!!");
        }
    });
}
appendingData();
