function upperCaseFirstLetter(str) {
    let str_arr = str.split(' ');
    let result = "";

    for (let word of str_arr) {
        result += word[0].toUpperCase();
        result += word.slice(1);
        result += ' ';
    }

    return result.trim();
}

const str = 'the quick brown fox';
console.log(upperCaseFirstLetter(str));