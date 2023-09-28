// this is our javascript file.

let budgetForm = document.querySelector("#budget-form")

// intercept the form.

// focus to the first element
budgetForm.elements["budget-title"].focus()

// create an event listener on the form.
budgetForm.addEventListener("submit", (event) => {
    // get the form element values for title, description and amount


    // prevent the form from being submitted.
    event.preventDefault()

    // console.log("I tested it before")
    let form = event.target //that is the same as budgetForm

    let title = form.elements["budget-title"]
    let description = form.elements["budget-description"]
    let amount = form.elements["amount"]

    console.log(title.value);
    console.log(description.value);
    console.log(amount.value);
    // get the form values.
    // add the item

    addLineItem(title.value, amount.value, description.value)

    updateTotal(amount.value)
    // update current budget total
    // reset the values

    title.value = ""
    description.value = ""
    amount.value = ""
    // focus back at the title
    title.focus()
})


// // add a budget item create function
let budgetList = document.querySelector(".current-budget")
const addLineItem = (title, amount, description) => {
    let budgetList = document.querySelector(".current-budget")
    budgetList.innerHTML += `<li class="list-group-item list-group-item-action" aria-current="true">
 the title is: ${title} </br>
 the budget is: (${parseInt(amount).toFixed(2)}) </br>
 the description is:  ${description}
</li>`   //template rings. Back tags
}
/*
<li class="list-group-item list-group-item-action" aria-current="true">
    TITLE HERE (AMOUNT HERE) - DESCRIPTION HERE
</li>
*/
// // const addEventListener = (title,amount,description) => {
// // let budgetList = documetn.querySelector(".current-budget")
// // budgetList.innerHTML += `<li class="list-group-item list-group-item-action" aria-current="true">
// // ${title}(AMOUNT HERE) - DESCRIPTION HERE
// // </li>`

// }
// add a updateTotal function
const updateTotal = (amount) => {
    let budgetTotal = document.querySelector("#budget-total")
    console.log(budgetTotal.innerText)
    console.log(amount)
    let sum = parseInt(budgetTotal.innerText) + parseFloat(amount)
    budgetTotal.innerText = sum.toFixed(2)
}
// add active class to list item on mouseover
budgetList.addEventListener("mouseover", (event) => {
    console.log(event.target) //the specific list item I have.
    let listElement = event.target
    listElement.classList.add("active")
})

// remove active class from list item on mouseou

budgetList.addEventListener("mouseout", (event) => {
    console.log(event.target) //the specific list item I have.
    let listElement = event.target
    listElement.classList.remove("active")
})