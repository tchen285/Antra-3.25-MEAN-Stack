// 21. Write a JavaScript function to get all possible subset 
// with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]

function combinations(nums, k) {
    const result = [];

    function backtrack(startIndex, currentCombo) {
        if (currentCombo.length === k) {
            result.push([...currentCombo]);
            return;
        }

        for (let i = startIndex; i < nums.length; i++) {
            currentCombo.push(nums[i]);
            backtrack(i + 1, currentCombo);
            currentCombo.pop();
        }
    }

    backtrack(0, []);
    return result;
}

const arr = [1, 2, 3];
const k = 2;
console.log(combinations(arr, 2));