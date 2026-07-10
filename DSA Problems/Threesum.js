const nums = [-1, 0, 1, 2, -1, -2];
const target = 0;


var threeSum = function(nums, target){
    for(let i = 0 ; i < nums.length ;i++ ){
        if (i > 0 && nums[i] === nums[i-1]) 
            continue;
        for (let j = i+1 ; j< nums.length ; j++){
            if (j > 0 && nums[j] === nums[j-1]) 
                continue;
            for (let k = j+1 ; k <nums.length ; k++){
                if (k > 0 && nums[k] === nums[k-1]) 
                    continue;
                if (nums[i] + nums[j] + nums[k] === target){
                    return[i,j,k];
                }
            }


        }

    } 
}

console.log(threeSum);