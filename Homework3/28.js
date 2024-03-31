// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

function callFunction(functionName) {
    functionName();
}

function helloWorld() {
    console.log("Hello World!");
}

callFunction(helloWorld);