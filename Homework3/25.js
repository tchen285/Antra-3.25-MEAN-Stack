// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

function Longest_Country_Name(str) {
    let max_length = 0;

    for (let country of str) {
        max_length = Math.max(max_length, country.length);
    }

    for (let country of str) {
        if (country.length === max_length) {
            return country;
        }
    }

    return str[0];
}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));