let nums = [3, 2, 4, 1];
let maxSum = Number.NEGATIVE_INFINITY; 


for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) { 
        let sum = nums[i] + nums[j]; 
        if (sum > maxSum) { 
            maxSum = sum; 
        }
    }
}

console.log("El mayor es " + maxSum);