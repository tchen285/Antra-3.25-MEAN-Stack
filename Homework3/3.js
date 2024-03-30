function generateCombinations(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }

    return result;
}

const str = 'dog';
const combinations = generateCombinations(str);
console.log(combinations);
