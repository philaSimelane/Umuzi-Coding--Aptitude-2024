function task10(word1, word2) {
    let characterStore = []; //A list to keep track and store common characters or letters
  
    for (let i = 0; i < word2.length; i++) {
      for (let j = 0; j < word1.length; j++) {
        if (word1[j].toLowerCase() === word2[i].toLowerCase()) {
          characterStore.push(word1[j].toLowerCase());
        }
        else{
            console.log("no common letters")
        }
      }
    }
    characterStore = [...new Set(characterStore)].sort();
  
    let commonLetters = "";
    for (let i = 0; i < characterStore.length; i++) {
      commonLetters += characterStore[i];
      if (i < characterStore.length - 1) commonLetters += ", ";
    }
  
    console.log(commonLetters);
  }

  // sort character store
  task10("Foo","bar");