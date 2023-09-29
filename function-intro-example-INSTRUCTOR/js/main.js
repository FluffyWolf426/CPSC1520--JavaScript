// this is our javascript file.

// make sure my javascript file is linked
console.log("javascript is linked")

const getUsername = () => {
  let username = prompt("What is your username")
  return username
}

const getDescription = () => {
  let description = prompt("Enter a description")
  return description
}

const updateElement = (selector, value) => {
  let element = document.querySelector(selector)
  element.innerText = value
}

const updateDescription = () => {
  // get the description
  let newDescription = getDescription()
  // update the description on the page.
  updateElement(".description", newDescription)

}

const updateUsername = () => {
  let username = getUsername()
  updateElement("#username", username)
}

updateUsername()
updateDescription()

