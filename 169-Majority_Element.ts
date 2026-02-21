/**
 Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



 */

function majorityElement(nums: number[]): number{
    if(!nums.length) return -1;
    let key = 0;
    let count = 0;
    for(const n of nums){
        if(count === 0){
            key = n;
        }
        count += n === key? 1: -1;
    }
    return key;
}


console.log(majorityElement([3,2,3]));