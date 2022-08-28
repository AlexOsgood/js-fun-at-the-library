function createTitle(title) {
  return (`The ${title}`)
}


function buildMainCharacter(name, age, pronouns) {
  return{
      name: name,
      age: age,
      pronouns: pronouns
    }
}


function saveReview(restaurantReview, reviews) {
  if (!reviews.includes(restaurantReview)) {
    reviews.push(restaurantReview)
  }
}


function calculatePageCount(bookTitle) {
  return 20 * bookTitle.length
}


function writeBook(bookTitle, bookCharacter, type) {
  return{
      title: bookTitle,
      mainCharacter: bookCharacter,
      pageCount: calculatePageCount(bookTitle),
      genre: type
  }
}


function editBook(book) {
   book.pageCount = book.pageCount * .75
}



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
