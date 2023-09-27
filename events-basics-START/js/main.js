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

let naitLink = document.querySelector(".link")

naitLink.addEventListener("click", (event) => {
    //we dont want to leave our page
    event. PreventDefault()
//this essentially plock the default
    window.open(naitLink.href)
}) 

//how to start the form from submitting


