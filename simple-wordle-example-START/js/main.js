/*
We're going to build wordle without the keyboard.

1. Add an event listener that listens to the form
2. Validate if the value to see if it's five characters
3. Create a function called "addguess" which pushes the guess on the guesses array
   Note: this is going to to take our new guess as a parameter
4. only call the add guess function if the form is valid
5. Create a showGuessOnPage function which will show the guess on the page
    a. return early if there are no guesses
    b. create a selector that will select the guess row characters as a nodelist
    c. using foreach and your knowledge of accessing indexes to add each letter to
       each element
    d. create a isCharacterInCorrectPlace function to check if the character is in the right
       index of the word
       - if it is add the 'correct-letter-placement' class to the element
       - return the function early if it is so that we can check the next character
    e.  create a isCharacterInWord function to check if the character is in the function
        - add the incorrect-letter-placement class to the element if it is
        - Note if it's in the correct placement it should have been true in the function
          above
6. Show the message in the element with the class wordle-success if it's successful
   Note: you can use includes on an array!
   We're going to create a function that will check this each guess!

*/

let wordleForm = document.querySelector("#wordle-form")
let guess = []

wordleForm.addEventListener("submit", (event) =>{
event.preventDefault()
// console.log("wordle form submitted")
let newGuessInput = event.target.elements["guess"]
let newGuess = newGuessInput.value
// console.log(newGuess)

if (isTextFiveChars(newGuess)){
   //idea case
newGuessInput.classList.remove('is-invalid')
}else{
   //invalid case
   newGuessInput.classList.add('is-invalid')
   return //once it hits this nothing below  is executed
}

//show guess.
addGuess.apply(newGuess)

wordleForm.reset()
})

const addGuess=(guess)=>{
   guesses.push(guess)

   console.log("in addGuess")
   console.log(guess)
}

const isTextFiveChars = (guess) =>{
return guess.length ===5
   //is the same as below
   // if (newGuess.length ==5){
   //    return true
   // }else{
   //    return false
   // }
}


const showGuessOnPage = () =>{
   //skip the function if there are no guesses
   if(guesses.length===0){
      return
   }
   //the current guess index is going to be the last item 
   let guessIndex = guesses.length - 1
   let currentGuess = guesses[guessIndex]
   // console.log(`current guess is ${currentGuess}`)
//build the selector for the guess characters.
let selector = `.guess-${guessIndex} .guess-character`
let characterDives = document.querySelector(selector)
console.log(`currentGuess ${currentGuess}`)
console.log(`selector is ${selector}`)



}

//Possible improvements
//checking if there numbers
//checking actual a word