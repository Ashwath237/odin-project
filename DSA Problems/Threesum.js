const nums = [-1, 0, 1, 2, -1, -2];
const target = 0;


var twoSum = function(nums, target){
    for(let i = 0 ; i < nums.length ;i++ ){
        for (let j = i+1 ; j< nums.length ; j++){
            for (let k = j+1 ; k <nums.length ; k++){
                if (nums[i] + nums[j] + nums[k] === target){
                    return[i,j,k];
                }
            }


        }

    } 
}