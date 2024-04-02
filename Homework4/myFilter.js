// Filtering numbers >= 5 from the original array
function greaterThanFive(num) {
    if (num >= 5) {
        return num;
    }
}

Array.prototype.myFilter = function(nums) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (nums(this[i])) {
            newArr.push(nums(this[i]));
        }
    }

    return newArr;
}

const arr = [12, 9, 3, 0, 77, 2];
const newArr = arr.myFilter(greaterThanFive);
console.log(newArr);