nums=[1,2,3,4,5]
let count=0
for(let i=0;i<nums.length;i++){
    if(nums[i]%2===0){
        count++;
    }
}
alert("estos son pares"+ count)