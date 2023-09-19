// this is our javascript file.


// in the html we've linked the 
// marked js package and we can see it's available here
// through the global scope of javascript.
// more information see here: https://marked.js.org/


// select the text input. 
let textInput = document.querySelector("#markdown-input-text")
let timeExecuted = 0
// console.log(textInput)
// make an event listener that listens to keydown on the input
  textInput.addEventListener("keyup", (event)=> {
    console.log("We are in the event hendler")
    //I want to get the value of this input
    timeExecuted++;
    console.log(event.targer.value) //is the same as textInput.value
  
// call the render preview function
    renderPreview(event.target.value)
    // you'll see that the preview changes
    // every time we have something.
})

// create a function call renderPreview
const renderPreview = (newInputValue) => {
    // select the mark down element
    let preview = document.querySelector("#markdown-preview")
    // use the imported library called marked and parse the new input value.
    preview.innerHTML = marked.parse(newInputValue)
}