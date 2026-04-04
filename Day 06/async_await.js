function helloAadi(){
    let p = new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Inside promise set timeout");
            resolve("This is resolve part!!")
        },5000);
        console.log("below SetTimout");
    })
    return p;
}

async function main(){
    console.log("inside Main");
    let value = await helloAadi();
    
    console.log("below Promise!!")
}
main();

console.log("After main");