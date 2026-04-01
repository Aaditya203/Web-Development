function objectsMethods(obj){
    console.log(obj);

    const keys = Object.keys(obj);
    console.log("Keys are: "+keys);

    const values = Object.values(obj);
    console.log("Values are: "+ values);
}

const objct = {
    name:"Aditya",
    age:22,
    gender:"Male",
    city:"Raipur"
}
objectsMethods(objct);


const newObj = {
    key1:"value1",
    key2:"value2",
    key3:"value3"
}
let newObjs = Object.assign({},newObj,{newProperty:"newValue"});
console.log(newObjs); 