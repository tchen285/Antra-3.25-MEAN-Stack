function reverseNum(num) {
    const num_str = num.toString();
    
    return parseInt(reverseStr(num_str))
}

function reverseStr(str) {
    let reversed = "";
    for (let i = str.length - 1; i >=0; i--) {
        reversed += str[i];
    }

    return reversed;
}

const x = 32243;
console.log(reverseNum(x));