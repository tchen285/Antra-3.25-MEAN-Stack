// 22. Write a JavaScript function that accepts two arguments, 
// a string and a letter and the function will count the number 
// of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 

function findOccurrence(str, cha) {
    result = 0;

    for (let char of str) {
        if (char === cha) {
            result++;
        }
    }

    return result;
}

const str = "microsoft.com";
const cha = 'o';
console.log(findOccurrence(str, cha));