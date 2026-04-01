const user = {
    name:"Aditya",
    age:22,
    gender:"Male"
}
console.log(user["name"]);

const users = '{"name":"Karan","age":22,"gender":"male"}'
const user2 = JSON.parse(users);
console.log(user2["name"]);

const user3 = {
    name:"Tanisha",
    age:20,
    gender:"Female"
}
const str = JSON.stringify(user3);
console.log(str); 
