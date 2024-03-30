// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function getType(value) {
    return typeof value;
}

// const val = [1, 2, 3];
// const val = false;
// const val = function() {};
// const val = 123;
// const val = "123";
const val = undefined;
console.log(getType(val));