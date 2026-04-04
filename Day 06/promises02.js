function helloAadi(){
    return new Promise((resolve,reject)=>{
        console.log("Hi there!!");
        setTimeout(()=>{
            console.log("Inside Set timeout")
        },2000);
        reject("This will be printed");
    });
}

helloAadi().then((result)=>{
    if(result){
        console.log("The query is resolved!!")
    }
    else{
        console.log("Not Resolved!!");
    }
})