// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let n = 2; n < num; n++) {
        if (num % n === 0) {
            return false;
        }
    }

    return true;
}

// const num = 7;
const num = 8;
console.log(isPrime(num));