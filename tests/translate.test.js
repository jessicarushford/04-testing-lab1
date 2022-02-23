"use strict";

const translate = require("../src/translate");

describe("translate function", () => {
  test("word that starts with a vowel", () => {
    const result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("word that starts with a capital vowel", () => {
    const result = translate("Apple");
    expect(result).toBe("appleway");
  });
  test("word that starts with a consonant", () => {
    const result = translate("Happy");
    expect(result).toBe("appyhay");
  });
  test("word that starts with two consonants", () => {
    const result = translate("Grapple");
    expect(result).toBe("applegray");
  });
});

// "use strict";

// const translate = require("../src/translate");

// describe("translate function", () => {
//   test("word that starts with the vowel a", () => {
//     const result = translate("apple");
//     expect(result).toBe("appleway");
//   });
//   test("word that starts with the vowel e", () => {
//     const result = translate("elephant");
//     expect(result).toBe("elephantway");
//   });
//   test("word that starts with the vowel i", () => {
//     const result = translate("igloo");
//     expect(result).toBe("iglooway");
//   });
//   test("word that starts with the vowel o", () => {
//     const result = translate("owl");
//     expect(result).toBe("owlway");
//   });
//   test("word that starts with the vowel u", () => {
//     const result = translate("umbrella");
//     expect(result).toBe("umbrellaway");
//   });

//   test("word that starts with a capital vowel a", () => {
//     const result = translate("Apple");
//     expect(result).toBe("appleway");
//   });
//   test("word that starts with a capital vowel e", () => {
//     const result = translate("Elephant");
//     expect(result).toBe("elephantway");
//   });
//   test("word that starts with a capital vowel i", () => {
//     const result = translate("Igloo");
//     expect(result).toBe("iglooway");
//   });
//   test("word that starts with a capital vowel o", () => {
//     const result = translate("Owl");
//     expect(result).toBe("owlway");
//   });
//   test("word that starts with a capital vowel u", () => {
//     const result = translate("Umbrella");
//     expect(result).toBe("umbrellaway");
//   });

//   test("word that start with one consonant and second letter a", () => {
//     const result = translate("cat");
//     expect(result).toBe("atcay");
//   });
//   test("word that start with one consonant and second letter e", () => {
//     const result = translate("jessica");
//     expect(result).toBe("essicajay");
//   });
//   test("word that start with one consonant and second letter i", () => {
//     const result = translate("king");
//     expect(result).toBe("ingkay");
//   });
//   test("word that start with one consonant and second letter o", () => {
//     const result = translate("money");
//     expect(result).toBe("oneymay");
//   });
//   test("word that start with one consonant and second letter u", () => {
//     const result = translate("sugar");
//     expect(result).toBe("ugarsay");
//   });

//   test("word that start with two consonants", () => {
//     const result = translate("stick");
//     expect(result).toBe("ickstay");
//   });
//   test("word that start with two consonants", () => {
//     const result = translate("french");
//     expect(result).toBe("enchfray");
//   });
//   test("word that start with two consonants", () => {
//     const result = translate("blue");
//     expect(result).toBe("ueblay");
//   });

//   test("word that start with three consonants", () => {
//     const result = translate("shrimp");
//     expect(result).toBe("impshray");
//   });
//   //   test("word that start with four consonants", () => {
//   //     const result = translate("store");
//   //     expect(result).toBe("orstay");
//   //   });
//   test("word that start with five consonants", () => {
//     const result = translate("crystal");
//     expect(result).toBe("alcrystay");
//   });
// });
