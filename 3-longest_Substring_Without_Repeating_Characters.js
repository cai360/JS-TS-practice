// Given a string s, find the length of the longest substring without duplicate characters.

 
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

const longestSubstring = (str) => {
  const set = new Set();

  let left = 0;
  let maxLen = 0;

  for(let i=0; i < str.length; i++){
    while(set.has(str[i])){
      set.delete(str[left]);
      left += 1;
    }

    set.add(str[i]);
    maxLen = Math.max(maxLen, i - left + 1);
  }
  return maxLen;
}

let value = longestSubstring("abcabcbb");