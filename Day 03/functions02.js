function sum(a,b){
    let value = a+b;
    displayResult(value);
}
function displayResult(data){
    console.log("Result of sum is: "+data);
}
sum(5,10);


function suming(a,b,printing){
    let value = a+b;
    printing(value);
}
function displays(data){
    console.log("The sum is: "+ data);
}

console.log(suming(12,14,displays));