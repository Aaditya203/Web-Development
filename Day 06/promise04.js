function promisified(duration){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("This is resolved!!");
        },duration);
    })
}
promisified(10000);