const fs = require('fs').promises;
async function removeSpaces(){
    
    try{
        let data = await fs.readFile('E:/WebDev/WebDev Codes/day 06/a.txt','utf-8');
    let str = data.replace(/\s+/g, " ").trim();
    await fs.writeFile("E:/WebDev/WebDev Codes/day 06/a.txt",str);
    console.log("Updated!!");
    }
    catch(err){
        console.log("Error occured",err);
    }
}
removeSpaces();