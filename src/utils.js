// Your code here
// src/utils.js
export function isPalindrome(word) {
    if (typeof word !== "string") throw new Error("Input must be a string");
    // Check if the string is empty before checking for alphabetic characters
    if (word === "") return false;
    //Ensure the word contains only alphabetic characters
    if (!/^[A-Za-z]+$/.test(word)) throw new Error("Invalid input");
    if (word === "") return false;

    const normalizedWord = word.toLowerCase();
    const reversedWord = normalizedWord.split("").reverse().join("");

    return normalizedWord === reversedWord;
}
