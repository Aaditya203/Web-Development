const names = ["Aditya","Tanisha","Mukesh","Neetu","Nandani"];
// for(let i =0;i<names.length;i++){
//     console.log(names[i]);
// }

const nums = [10,11,12,13,14,150,16,17,18,19,20];
//printing even number in an array
// for(let i=0;i<nums.length;i++){
//     if(nums[i]%2==0){
//         console.log(nums[i]);
//     }
// }

//printing largest number in array
let maxs = 0;
for(let i =0;i<nums.length;i++){
    if(nums[i]>maxs){
        maxs = nums[i];
    }
}
console.log(maxs);

