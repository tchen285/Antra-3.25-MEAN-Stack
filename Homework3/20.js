// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// The function will take a number(n) as an input; generate a string of length n and random characters from that list.

function generateString(str, n) {
    let len = str.length;
    let result = "";
    let count = n;

    while (count > 0) {
        let randomNum = Math.floor(Math.random() * len);
        result += str[randomNum];
        count--;
    }

    return result;
}

const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const n = 7;
console.log(generateString(str, n));