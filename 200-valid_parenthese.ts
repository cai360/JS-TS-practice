/**
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

 */

//if '(', '{', '[', push it to the stack
//if ')', '}', ']'  1. stack must not to be empty  2. top element in the stack match  -> pop
//in the end the stack must to me empty 

function isValid(str: string): boolean{
    if(str.length % 2 !== 0) return false;

    const stack:string[] = [];
    const pair = new Map<string, string>([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ]);

    const openSet = new Set(['(', '{', '[',]);
    
    for(const ch of str){
        if(openSet.has(ch)){
            stack.push(ch);
            continue;
        }
        if(pair.has(ch)){
            if (stack.length === 0) return false;
            const top = stack.pop()
            if(top !== pair.get(ch)) return false;
        }
    }
    return stack.length === 0;

}

console.log(isValid('([)]'));


/**
 * for of : 可以直接拿到元素本身
 * arr.forEach(value, index) => {不能break/ continue}
 * for(const key in obj) : for object, object key 一定是 string 
 * 
 * Object: key 一定是 string
 *      obj[key]
 *      Object.keys(obj)
 *      Object.values(obj)
 *      Object.entries(obj)
 *  loop:
 *      for (const [key, value] of Object.entries(obj)) {}
 * 
 * Array:
 *      arr.push(x)
 *      arr.pop()
 *      arr.shift()頭部移除（慢）
 *      arr.unshift()  // 頭部加入（慢）
 *  loop:
 *      for (const v of arr) {}
 *      for (let i = 0; i < arr.length; i++) {}
 * 
 * Set: (判斷元素在不在)
 *      set.add(x)
 *      set.has(x)
 *      set.delete(x)
 *  loop:
 *      for (const v of set) {}
 * 
 * Map: 
 *      map.set(key, value)
 *      map.get(key)        // value | undefined   
 *      map.has(key)
 *      map.delete(key)
 * 
 *  loop:
 *      for (const [key, value] of map) {}
 *      for (const key of map.keys()) {只取 key}
 *      for (const value of map.values()) { 只取value}
 */

