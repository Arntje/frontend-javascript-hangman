const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost, isItASingleLetter } = require("./gamelogic");

// Schrijf een functie voor het opvragen van een letter
function askForLetter ()  {
  // Geef me een letter
  let letter = question("Raad een letter: ").toLowerCase();

  // Check of het een enkele letter is
  while (!isItASingleLetter(letter)) {
    console.log("Je kunt maar één letter tegelijk invoeren");
    letter = question("Raad een letter: ");
  }
  return letter;
}

function game(word, guesses) {

  console.log("Dit heb je tot nu toe geraden: ", guesses);
  console.log(displayWordSoFar(word, guesses));
  if (isGameWon(word, guesses))  {
    console.log("Gefeliciteerd, je hebt het woord geraden!");
    return;
  }

  if (isGameLost(word, guesses))  {
    console.log("Helaas, 7x fout, je het het spel verloren");
    console.log(`\n____________\n| /       |\n|/       _o_\n|         O\n|        | |\n============`)
    return;
  } else {
    if (counter === 1) {
      console.log(`\n|\n|\n|\n|\n|\n============`)
    } else if (counter === 2) {
      console.log(`\n| /\n|/\n|\n|\n|\n============`)
    } else if (counter === 3) {
      console.log(`\n____________\n| /\n|/\n|\n|\n|\n============`)
    } else if (counter === 4) {
      console.log(`\n____________\n| /       |\n|/\n|\n|\n|\n============`)
    } else if (counter === 5) {
      console.log(`\n____________\n| /       |\n|/       _o_\n|\n|\n|\n============`)
    } else if (counter === 6) {
      console.log(`\n____________\n| /       |\n|/       _o_\n|         O\n|\n|\n============`)
    }
  }

//  const(letter = question("Raad een letter: ");



//  if (!isItASingleLetter(letter)) {
//    console.log("Je kunt maar één letter tegelijk invoeren");}
const letter = askForLetter();
  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}



console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);