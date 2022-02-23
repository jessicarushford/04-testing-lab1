"use strict";

const translate = (word) => {
  word = word.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(word[0])) {
    return word + "way";
  } else {
    const index = word.split("").findIndex((letter) => vowels.includes(letter));
    // word.split("") === ex: ["c", "h", "a", "m", "b", "e", "r"]
    return word.slice(index) + word.slice(0, index) + "ay";
  }
};

module.exports = translate;

// YESTERDAY ATTEMPTS:
// const translate = (word) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   if (word.startsWith(vowels)) {
//     let englishWord = word;
//     let vowelEnding = "way";
//     let pigWord = englishWord.concat(vowelEnding);
//     for (let )
//   }
//   console.log(pigWord);
//   // if the word starts w/ a vowel, add "way" at the end
// };

// translate("apple");

// const translate = (word) => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let vowelEnding = "way";
//   let arrayOfLetters = word.split(" ");
//   if (word.arrayOfLetters[0] === vowels) {
//     word.concat(vowelEnding);
//   }
//   console.log(word);
// };

// const translate = (word) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let vowelIndex = 0;
//   word = word.toLowerCase();
//   if (vowels.includes(word[0])) {
//     return word + "way";
//   } else {
//       for (let char of str) {
//           if (vowels.includes(char))
//       }
//   }
//   console.log(word);
// };

// translate("apple");
