// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 

function findNums(arr) {
    let arr_copy = arr.slice();

    new_arr = arr_copy.sort();

    let len = arr.length;

    return [new_arr[1], new_arr[len - 2]];
}

const arr = [1,2,3,4,5];
console.log(findNums(arr));