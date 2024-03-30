// 5. Write a JavaScript function that accepts a string 
// as a parameter and converts the first letter 
// of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function upperCaseFirstLetter(str) {
    let str_arr = str.split(' ');
    let result = "";

    for (let word of str_arr) {
        result += word[0].toUpperCase();
        result += word.slice(1);
        result += ' ';
    }

    return result.trim();
}

const str = 'the quick brown fox';
console.log(upperCaseFirstLetter(str));