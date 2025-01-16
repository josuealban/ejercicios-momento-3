
const nums = [5, 10, 7, 15, 12];


let mayor = nums[0]; 


for (let i = 1; i < nums.length; i++) {
    if (nums[i] > mayor) {
        mayor = nums[i]; 
}
}


console.log(`El número mayor es: ${mayor}`);