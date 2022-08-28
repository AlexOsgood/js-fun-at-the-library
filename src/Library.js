function createLibrary(name) {
    return{
        name: name,
        shelves: {
          fantasy: [],
          fiction: [],
          nonFiction: [],
        }
      }
}


function addBook(library, book) { // when using a variable to access an object, use [] brackets
    library.shelves[book.genre].push(book)
}


function checkoutBook(library, title, genre) {
  var isAvailable = false
    for (var index = 0; index < library.shelves[genre].length; index++) {
      if (library.shelves[genre][index].title === title) {
        library.shelves[genre].splice(index, 1)
        isAvailable = true
      }
    }
    if (isAvailable) {
      return `You have now checked out ${title} from the ${library.name}`
    } else {
      return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  }
}




module.exports = {
 createLibrary,
 addBook,
 checkoutBook
};
