// 7. Write a JavaScript function that accepts a string as a parameter 
// and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, 
// we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5

function numberOfVowels(str) {
    let result = 0;

    for (let char of str) {
        if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
            result++;
        }
    }

    return result;
}

const str = "The quick brown fox";
console.log(numberOfVowels(str));