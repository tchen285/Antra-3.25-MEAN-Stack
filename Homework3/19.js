// 19. Write a JavaScript function that returns array elements larger than a number. 

function largerThanNum(arr, num) {
    let result = [];

    for (let number of arr) {
        if (number > num) {
            result.push(number);
        }
    }

    return result;
}

const arr = [3, 1, 0, 5, 7, 8];
const num = 3;
console.log(largerThanNum(arr, num));