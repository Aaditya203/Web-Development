function halt(milliseconds){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },milliseconds);
    })
}

async function main(){
    let value = await halt(10000);
    console.log("Hello")
}
main();
console.log("Hellow Owrld!!");