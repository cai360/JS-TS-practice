//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
function isAnagram(s: string, t:string): boolean{
    if(s.length !== t.length){return false}

    const map = new Map<string, number>();

    for(const c of s){
        if(c && map.has(c)){
            map.set(c, map.get(c)+1);
        }else{
            map.set(c, 1);
        }

    }

    for(const c of t){
        if(map.has(c)){
            map.set(c, map.get(c) -1);
            if(map.get(c) < 0){
                return false;
            }
        }else{
            return false
        }
    }
    return true 
}


console.log(isAnagram('car', 'rac'));
console.log(isAnagram('car', 'rad'));

