// 27. Write a JavaScript function that returns the longest palindrome in a given string. 

function longestPalindrome(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let oddPalindrome = expand(str, i, i);
        let evenPalindrome = expand(str, i, i + 1);

        if (oddPalindrome.length > result.length) {
            result = oddPalindrome;
        }

        if (evenPalindrome.length > result.length) {
            result = evenPalindrome;
        }
    }

    return result;
}

function expand(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }

    return str.substring(left + 1, right);
}

const str = "bananas";
console.log(longestPalindrome(str));