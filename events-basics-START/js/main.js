//Im going to listen to click

let button = document.querySelector(".btn-increment")
let counter = document.querySelector(".counter")

console.log('button')

let clicked = 0
button.addEventListener("click", () =>{
clicked = clicked + 1
counter.innerText = clicked
console.log(clicked)
})

//override default behaviour

let naitLink = document.querySelector("#link")

naitLink.addEventListener("click", (event) => {
    //we dont want to leave our page
    event. PreventDefault()
//this essentially plock the default
    window.open(naitLink.href)
}) 

//how to start the form from submitting

let form = document.querySelector(".form")

form.addEventListener("submit", (event) => {
   //prevent the default action form happening
     event.preventDefault()
})

//part 3 

let colorDiv = document.querySelector(".colours")

colorDiv.addEventListener("click", (event) =>{
    //here we're going to see that the event.target is the most specific element that is being clicked
    console.log(event.target)
    console.log(event.target.className)
  //we can reset the background color of the page.

  document.body.style = "background: " + event.target.className
  colorDiv.style = "background: " + event.target.className
 })