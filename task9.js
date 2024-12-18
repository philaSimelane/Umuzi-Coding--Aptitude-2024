function task9(word) {
    let vowels = ["a", "e", "i", "o", "u"];
  
    word = word.toLowerCase();
  
    let storeVowels = []; // A list that keeps track and stores vowels found
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
        if (word[i] === vowels[j]) {
          storeVowels.push(vowels[j]);
        }
      }
    }
  
    for (let i = 0; i < storeVowels.length; i++) {
      let countVowels = 0;
      for (let j = 0; j < storeVowels.length; j++) {
        if (storeVowels[i] == storeVowels[j]) {
          countVowels++;
        }
        if (countVowels > 1) {
          storeVowels.splice(j, 1);
          j = j + 1;
        }
      }
    }
  
    let vowelsToString = "Vowels: ";
    for (let i = 0; i < storeVowels.length; i++) {
      vowelsToString += storeVowels[i];
      if (i < storeVowels.length - 1) vowelsToString += ", ";
    }
  
    console.log(vowelsToString);
  }
  // Error: Vowels: e, o, a; only gets vowel once, need to output 'eeeoa'. fix get all voels in string look at python code
  MediaSourceHandle.exports = { task9 };