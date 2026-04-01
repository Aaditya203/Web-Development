const nums = [1,2,3,4];
nums.push(10);
console.log(nums);

nums.pop();
console.log(nums);

nums.shift();
console.log(nums);

nums.unshift(10);
console.log(nums);

const arr = [20,30,40,50];
console.log(nums.concat(arr));
// console.log(nums);

function printing(str){
    console.log(str);
}

nums.forEach(printing);  //it use callbacks which a function is passed as an argument in it
