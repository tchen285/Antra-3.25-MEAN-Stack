// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 

function longestSubstring(str) {
    let maxLength = 0;
    let start = 0;
    let map = {};
    let longestSubstring = '';

    for (let end = 0; end < str.length; end++) {
        const char = str[end];
        if (map[char] !== undefined && map[char] >= start) {
            start = map[char] + 1;
        }
        map[char] = end;
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            longestSubstring = str.substring(start, end + 1);
        }
    }

    return longestSubstring;
}

const str = "aabceabcbb"
console.log(longestSubstring(str));