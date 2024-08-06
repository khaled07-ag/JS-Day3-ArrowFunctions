const greet = (name)=>{
    console.log(`Hello ${name}`);
}
greet('Khaled');
const sum = (num1,num2)=>{
    return num1+num2;
}
console.log(sum(5,2))
const sqr = (num)=>{
    return num**2;
}
console.log(sqr(5));
const sqrAll = (nums) =>{
    for (var i=0; i<nums.length; i++) {
        nums[i] = nums[i]**2;
    } 
    return nums;
}
console.log(sqrAll([3,2,4,5]));