// 29. Write a JavaScript function to get the function name. 

function getFunctionName(functionName) {
    return functionName.name;
}

function helloWorld() {
    console.log("Hello World!");
}

console.log(getFunctionName(helloWorld));