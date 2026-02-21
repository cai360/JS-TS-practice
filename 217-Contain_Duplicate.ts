/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

//nums.length must to be greater then 0

function containsDuplicate(nums: number[]): boolean{
    if(!nums) return false;
    const set = new Set<number>(nums);
    if (set.size === nums.length) return false;
    return true;
}

// console.log(containsDuplicate([1, 2, 2, 3]));
// console.log(containsDuplicate([1, 2,  3]));


function containsDuplicate2(nums: number[]): boolean{
    const set = new Set<number>();
    for(const n of nums){
        if(set.has(n)){
            return true;
        }else{
            set.add(n);
        }
    }
    return false;
}

console.log(containsDuplicate2([1, 2, 2, 3]));
console.log(containsDuplicate2([1, 2,  3]));