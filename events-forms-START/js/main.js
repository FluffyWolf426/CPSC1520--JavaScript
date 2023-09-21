// this is our javascript file.

let budgetForm = document.querySelector("#budget-form")
// console.log(budgetForm.)
// intercept the form.

// focus to the first element
budgetForm.elements["budget-title"].focus()

// create an event listener on the form.
budgetForm.addEventListener("submit",(event) =>{
    // get the form element values for title, description and amount


    // prevent the form from being submitted.
    event.preventDefault()
    console.log("before")
    let form = event.target //that is the same as budgetForm

    let  title =form.elements["budget-title"]
    let description = form.elements["budget-description"]
    let amount = form.elements["amount"]
    // get the form values.
    // add the item
    // update current budget total
    // reset the values
    // focus back at the title
})

// add a budget item create function
/*
<li class="list-group-item list-group-item-action" aria-current="true">
    TITLE HERE (AMOUNT HERE) - DESCRIPTION HERE
</li>
*/
const addEventListener = (title,amount,description) => {
let budgetList = documetn.querySelector(".current-budget")
budgetList.innerHTML += `<li class="list-group-item list-group-item-action" aria-current="true">
${title}(AMOUNT HERE) - DESCRIPTION HERE
</li>`

}
// add a updateTotal function

// add active class to list item on mouseover


// remove active class from list item on mouseout.
