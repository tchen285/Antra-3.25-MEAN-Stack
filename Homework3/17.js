// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 

function findOccurrence(str) {
    const map = {};

    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }

    return map;
}

const str = "compression"
console.log(findOccurrence(str));