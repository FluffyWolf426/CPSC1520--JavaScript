/*
We're going to build wordle without the keyboard.

1. Add an event listener that listens to the form.
2. Validate if the value to see if it's five characters
3. Create a function called "addguess" which pushes the guess on the guesses array
   Note: this is going to to take our new guess as a parameter.
4. only call the add guess function if the form is valid.
5. Create a showGuessOnPage function which will show the guess on the page.
    a. return early if there are no guesses
    b. create a selector that will select the guess row characters as a nodelist.
    c. using foreach and your knowledge of accessing indexes to add each letter to
       each element.
    d. create a isCharacterInCorrectPlace function to check if the character is in the right
       index of the word.
       - if it is add the 'correct-letter-placement' class to the element.
       - return the function early if it is so that we can check the next character
    e.  create a isCharacterInWord function to check if the character is in the function.
        - add the incorrect-letter-placement class to the element if it is.
        - Note if it's in the correct placement it should have been true in the function
          above.
6. Show the message in the element with the class wordle-success if it's successful.
   Note: you can use includes on an array!
   We're going to create a function that will check this each guess!

*/

let wordleForm = document.querySelector("#wordle-form")
let wordleContainer = document.querySelector(".guesses-container")
let wordGuessElements = document.querySelectorAll(".guesses")
let guesses = []
let correctWord = "graph"

wordleForm.addEventListener("submit", (event)=> {
  event.preventDefault()
  let newGuessInput = event.target.elements["guess"]
  let newGuess = newGuessInput.value
  // do a quick validation
  if (isTextFiveChars(newGuess)) {
    newGuessInput.classList.remove('is-invalid')
  } else {
    newGuessInput.classList.add('is-invalid')
    return // once it hits this nothing below is executed.
  }
  // add and show guess.
  addGuess(newGuess)
  // reset the input
  wordleForm.reset()
})

wordleContainer.addEventListener("click", (event)=> {
  console.log("in wordle container")
  console.log(event.target)
  let element = event.target
  // exit the function if it's not a word guess element.
  if (!isWordGuessElement(element)) {
    return
  }
  // I'm going to get the index from what was clicked
  // convert the node list of guesses to an array
  let wordGuessArray = Array.from(wordGuessElements)
  // get the index of the current item.
  let index = wordGuessArray.indexOf(element)
  console.log(`index of the word guess element is ${index}`)
  removeGuess(index)
})

const removeGuess = (guessedWordIndex) => {
  const ITEMS_TO_DELETE = 1
  // removing an item with splice here.
  guesses.splice(guessedWordIndex, ITEMS_TO_DELETE)

  // render/redraw the guesses.
  renderGuesses()
}

const isWordGuessElement = (element) => {
  return element.classList.contains("guesses")
}

const addGuess = (guess) => {
  guesses.push(guess)

  // showGuessOnPage()
  renderGuesses()
  // check if correct.
  checkIfCorrect()
}

const checkIfCorrect = () => {
  let wordleSuccessAlert = document.querySelector(".wordle-success")
  // is the correct word in the guesses?
  if (guesses.includes(correctWord)) {
    // remove the hidden class.
    wordleSuccessAlert.classList.remove("hidden")
  }
}

const isTextFiveChars = (guess) => {
  return guess.length === 5
  // is the same as below
  // if (guess.length === 5) {
  //   return true
  // } else {
  //   return false
  // }
}

const renderGuesses = () => {
  // reset all of the values in the word elements.
  resetWordGuessElements()
  // loop through the existing guesses
  // i'll call the new showGuessOnPage where we pass in the index.
  guesses.map((guess, index)=> {
    showGuessOnPage(index)
  })
}

const resetWordGuessElements = () => {
  wordGuessElements.forEach((element)=> {
    element.innerHTML = `
    <div class=" guess-character"></div>
    <div class=" guess-character"></div>
    <div class=" guess-character"></div>
    <div class=" guess-character"></div>
    <div class=" guess-character"></div>
    delete`
  })
}


// we're going to change this to pass the index into the function.
const showGuessOnPage = (guessIndex) => {
  let currentGuess = guesses[guessIndex]
  
  // build the selector for the guess characters.
  let selector = `.guess-${guessIndex} .guess-character`
  let characterDivs = document.querySelectorAll(selector)

  // loop through the character divs and show their index.
  characterDivs.forEach((characterDiv, index)=> {
    // get the character using the index of the loop
    let currentCharacter = currentGuess[index]
    // display the character on the page.
    characterDiv.innerText = currentCharacter
    
    // is this in the character in the correct slot
    if (isCharacterInCorrectPlace(currentCharacter, index)) {
      characterDiv.classList.add("correct-letter-placement")
      return // we're want exit this is the ideal case.
    }

    // we're checking to see if it's not in the right spot
    // we are checking to see if it's in the word.
    if (isCharacterInWord(currentCharacter)) {
      characterDiv.classList.add("incorrect-letter-placement")
    }
  })
}

const isCharacterInCorrectPlace = (character, index) => {
  return character === correctWord[index]
}

const isCharacterInWord = (character) => {
  return correctWord.includes(character)

}


/**
 * Possible improvements.
 * - Checking if there numbers
 * - Checking actually a word.
 * - Force the user to just put in letters.
 * - Add some animations
 */