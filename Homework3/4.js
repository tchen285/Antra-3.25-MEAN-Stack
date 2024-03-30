function alphabeticalOrder(str) {
    let str_arr = str.split('');

    str_arr.sort();

    let result = str_arr.join('');

    return result;
}

const str = "webmaster";
console.log(alphabeticalOrder(str));