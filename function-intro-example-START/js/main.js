// this is our javascript file.
// make shure my javascript file is linked
console.log("javascript is linked")

const getUserName = () => {
    let username = prompt("What is your user name?")
    return username
}

const getDescription = () => {
    let description = prompt("Enter a description")
    return description
}

const updateDescription = () => {
    // get the description
    let newDescription = getDescription()
    // update the description on the page
    let descriptionElement = document.querySelector(".description")
    descriptionElement.innerText = newDescription
}

// let updateUserName = document.querySelector("#username")
// updateUserName.innerText = 'Viktor'

const updateUserName = () => {
    let username = getUserName()
    let usernameElement = document.querySelector("#username")
    usernameElement = document.querySelector(".description.lead")
    descriptionElement.innerText = newDescription
}

const updateUserName = () => {
    let username = getUserName()
    let usernameElement = document.querySelector()
}
let name = "Viktor"
const loversCats = funtcion (name) {
    let catLover = name + " loves cats"
}