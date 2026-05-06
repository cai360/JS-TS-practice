/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const ans = [];
    const sorted = nums.sort((a, b) => a - b);
    for(let i=0; i < nums.length - 2; i++){
        if(i > 0 && sorted[i] === sorted[i-1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        
        while(left < right){    
            const sum = sorted[i] + sorted[left] + sorted[right];
            if(sum === 0) {
                ans.push([sorted[i], sorted[left], sorted[right]]);
                while(left < right && sorted[left] === sorted[left+1]){
                    left += 1;
                }

                while (left < right && sorted[right] === sorted[right-1]){
                    right -= 1;
                }
                left += 1;
                right -= 1;
            }else if (sum < 0){
                left += 1;
            }else{
                right -= 1
            }
        }
    }

    return ans;
};

nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));