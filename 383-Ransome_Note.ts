/**
 Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
 */

function canConstruct(ransomNote: string, magazine: string):boolean{
    const mark = new Map<string, number>();
    for(let letter of magazine){
        mark.set(letter, (mark.get(letter) ?? 0) + 1);
    }

    for(let letter of ransomNote){
        const count = mark.get(letter);
        if(!count) return false;

        mark.set(letter, count - 1);
    }

    return true;
}


console.log(canConstruct('aa', 'aab'));
console.log(canConstruct('aab', 'baa'));