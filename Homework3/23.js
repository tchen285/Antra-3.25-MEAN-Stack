// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 

function findNotRepeated(str) {
    const map = {};

    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }

    for (let char of str) {
        if (map[char] === 1) {
            return char;
        }
    }

    return '0';
}

const str = 'abacddbec';
console.log(findNotRepeated(str)); 