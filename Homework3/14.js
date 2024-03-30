// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1

function toCoins(amount) {
    let currentAmount = amount;
    let result = [];

    while(currentAmount > 0) {
        if (currentAmount >= 25) {
            result.push(25);
            currentAmount -= 25;
        } else if (currentAmount >= 10) {
            result.push(10);
            currentAmount -= 10;
        } else if (currentAmount >= 5) {
            result.push(5);
            currentAmount -= 5;
        } else if (currentAmount >= 2) {
            result.push(2);
            currentAmount -= 2;
        } else {
            result.push(1);
            currentAmount -= 1;
        }
    }

    return result;
}

const amount = 46;
console.log(toCoins(amount));