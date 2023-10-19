// this is our javascript file

let movieFilterForm = document.querySelector('#movie-filter-form')
// focus on the filter element
movieFilterForm.elements["filter-query"].focus()
// select all movie list items the descendant css selector
// .top-movies-list li
let allMovieItems = document.querySelectorAll(".top-movies-list li")

// intercept the form and/or required elements
movieFilterForm.addEventListener("submit", (event)=> {
  event.preventDefault()
  // I want to get the input element value.
  let filter = event.target.elements["filter-query"].value
  console.log(filter)

  // filter the values below
  filterItems(filter)
})

const filterItems = (filterValue) => {
  let lowerCaseFilterValue = filterValue.toLowerCase()
  
  // we're going to convert allMovieItems to an array
  // so that we can use map.
  let movieItemsArray = Array.from(allMovieItems)
  console.log(movieItemsArray.__proto__)

  movieItemsArray.map((movieItem)=>{
    let lowerCaseMovieItem = movieItem.innerText.toLowerCase()
    if (lowerCaseMovieItem.includes(lowerCaseFilterValue)){
      // valid
      movieItem.classList.remove("hidden-item")
    } else {
      // in valid where it is not included
      movieItem.classList.add("hidden-item")
    }
  })
}


// get the form value and call the function filterItems
// const filterItems = (filterValue) => {
//   // make the filter value lower case
//   let lowerCaseFilterValue = filterValue.toLowerCase()
//   // loop through the items
//   allMovieItems.forEach((movieItem)=>{
//     let lowerCaseMovieItem = movieItem.innerText.toLowerCase()
//     if (lowerCaseMovieItem.includes(lowerCaseFilterValue)){
//       // valid
//       movieItem.classList.remove("hidden-item")
//     } else {
//       // in valid where it is not included
//       movieItem.classList.add("hidden-item")
//     }
//   })
//   // hide them if they are not the same as my filter value.
// }



/*

We're going to create a function named "filterItems"
that check each item contains our search query
- if it's not, then we're going to add the "hidden-item" class
- if does include it, we're going to remove the "hidden-item" class

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

*/
