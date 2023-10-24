// this is our javascript file.
console.log('markdown js linked')

// in the html we've linked the 
// marked js package and we can see it's available here
// through the global scope of javascript.
// more information see here: https://marked.js.org/
console.log(marked)

// select the text input. 
let textInput = document.querySelector("#markdown-input-text")

// make an event listener that listens to keydown on the input

textInput.addEventListener("keyup", (event)=> {
    // event.target is the same as the textInput.
    // it's essentially what dom element is being
    // most specificcally targetted uncomment line below to see this.
    // console.log(event.target)
    
    // let's get the input value by calling.
    console.log(event.target.value)
    // call the render preview function
    // you'll see that the preview changes
    // every time we have something.
    renderPreview(event.target.value)
});



const renderPreview = (newInputValue) => {
    // select the mark down element
    let preview = document.querySelector("#markdown-preview")
    
    // use the imported library called marked

    preview.innerHTML = marked.parse(newInputValue)
}