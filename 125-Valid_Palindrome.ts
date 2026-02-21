/**
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

function isPalindrome(str: string): boolean{
    if(!str) return true;
    const theLower = str.toLowerCase();
    let left = 0;
    let right = theLower.length -1;
    while(left < right){
        const l = theLower[left];
        const r = theLower[right];
        if(!l || !isAlphanumeric(l)){
            left += 1;
            continue;
        }
        if(!r || !isAlphanumeric(r)){
            right -= 1
            continue;
        }
        if(theLower [left] !== theLower [right]){
            return false;
        }
        left += 1;
        right -= 1;
    }
    
    return true
}

function isAlphanumeric(c: string): boolean{
    if((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9') ){
        return true;

    }
    return false
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome(''));
console.log(isPalindrome('race a car'));