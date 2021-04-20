function displayWordSoFar(word, guesses) {

  let displayedWord = "";

  for (let i = 0; i < word.length; i++) {
    // variabele met letter
    const letter = word[i];

    // zit letter in array
    const isGuessed = guesses.includes(letter);

    // zo ja: toevoegen aan string
    if (isGuessed) {
      const toAdd = letter + " ";
      displayedWord += toAdd;
    } else {
      // anders
      displayedWord += "_ ";

    }
  }
    return displayedWord;
  }
  function isGameWon(word, guesses) {
    // WRITE ME
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];

      if (!guesses.includes(letter))  {
        return false;
      }
    }
    return true;
  }

  function isGameLost(word, guesses) {
    // WRITE ME
    // Itereer door de guesses heen
    let splitWord = [];

    for (let i = 0; i < word.length; i++)  {
      // Als een guess niet in het woord zit counter +1

      let letter = word[i];
      splitWord.push(letter);
     // console.log(splitWord);
    }

    counter = 0;
    for (let i = 0; i < guesses.length; i++)  {
      if (!splitWord.includes(guesses[i])) {
        counter++;
      }
    }
    if (counter >=7)  {
      return true;
    } else  {
      return false;
    }


    // Als counter = 7 : true

  }

  module.exports = {
    displayWordSoFar: displayWordSoFar,
    isGameWon: isGameWon,
    isGameLost: isGameLost,
  }