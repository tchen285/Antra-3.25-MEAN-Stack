// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function binarySearch(arr, num) {
    let sortedArr = arr.sort();

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (sortedArr[mid] >= num) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

const arr = [3, 1, 0, 5, 7, 8];
const num = 1;
console.log(binarySearch(arr, num));