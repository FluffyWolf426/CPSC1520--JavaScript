// part 1 here I'm going listen to clicks.

let button = document.querySelector(".btn-increment")
let counter = document.querySelector(".counter")

let clicked = 0

button.addEventListener("click", ()=> {
  clicked = clicked + 1
  counter.innerText = clicked
})

// part 2 override default behaviour.

let naitLink = document.querySelector(".link")

naitLink.addEventListener("click", (event)=> {
  // we don't want to leave our page!
  event.preventDefault()
  // this essentially blocks the default
  window.open(naitLink.href)
})

// how to stop a form from submitting.
let form = document.querySelector(".form")

form.addEventListener("submit", (event)=> {
  // prevent the default action from happening.
  event.preventDefault()
})

// part 3
let colourDiv = document.querySelector(".colours")

colourDiv.addEventListener("click", (event)=> {
  // here we're going to see that the event.target
  // is the most specific element that is being clicked
  console.log('The event.target is below')
  console.log(event.target)
  console.log("We can see the className on the target")
  console.log(event.target.className)

  // we can reset the background color of an element.
  // based on the class name which is a color of the above.
  // document.body.style = "background: "+ event.target.className
  // if we just wanted to do the colourDiv
  colourDiv.style = "background: "+ event.target.className
})
