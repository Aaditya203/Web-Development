const data = [{
    firstname: "Aditya",
    age: 22,
    gender:"male"
},
{
    firstname:"Tanisha",
    age:21,
    gender:"female"
},
{
    firstname:"Mukesh",
    age:53,
    gender:"male"
},
{
    firstname:"Neetu",
    age:43,
    gender:"female"
}];
for(let i=0;i<data.length;i++){
    if(data[i]["gender"]=="male"){
        console.log(data[i]["firstname"])
    }
} 