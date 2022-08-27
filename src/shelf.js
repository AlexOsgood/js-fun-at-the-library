function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(book)
  }
}


function unshelfBook(title, genre) {
  for (var i = 0; i < genre.length; i++) {
    if (genre[i].title === title) {
        genre.splice(i,1)
    }
  }
}


function listTitles(books) {
  var shelfList = []
  for (var i = 0; i < books.length; i++) {
      shelfList.push(books[i].title);
  } return shelfList.join(", ")
}


function searchShelf(type, name) {
  var includesBook = false
    for (var i = 0; i < type.length; i++) {
      if (type[i].title.includes(name)) {
        includesBook = true
      } else (
        includesBook = false
      )
    }
  return includesBook
}




module.exports = {
   shelfBook,
   unshelfBook,
   listTitles,
   searchShelf
};
