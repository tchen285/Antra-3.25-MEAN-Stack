// 6. Write a JavaScript function that accepts a string 
// as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function longestWord(str) {
    let words = str.split(' ');
    let max_length = words[0].length;

    for (let word of words) {
        max_length = Math.max(max_length, word.length);
    }

    for (let word of words) {
        if (word.length === max_length) {
            return word;
        }
    }

    return words[0];
}

const str = "Web Development Tutorial";
console.log(longestWord(str));