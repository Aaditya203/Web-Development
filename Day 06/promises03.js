console.log("First position: 1");
function promisified(){
    console.log("inside function!! 3")
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Inside setTime out! 4");
            resolve("Inside resolve!! 6");
        },5000);
    });
}
console.log("In Middle!! 2");
promisified().then((value)=>{
    console.log("position: 5");
    console.log(value);
})