Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : 0;

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

function reduce(accumulator, currentValue) {
    return accumulator + currentValue;
}

const arr = [6, 7, 1, 9, 0];
const sum = arr.myReduce(reduce);
console.log(sum); 