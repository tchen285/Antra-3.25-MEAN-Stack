// 13. Write a JavaScript function to compute the factors of a positive integer. 

function findFactors(num) {
    let result = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            result.push(i);
        }
    }

    return result;
}

// const num = 12;
const num = 10;
console.log(findFactors(num));