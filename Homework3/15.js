// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
// Accept b and n from the user and display the result. 
// b的n次方

function findExponential(base, n) {
    return Math.pow(base, n);
}

const base = 2;
const n = 3;
console.log(findExponential(base, n));