// 4. Arrange in alphabetical order
function arrangeAlphabetically(books, callback) {
     const titles = books.map(book => book.title).sort();
     callback(titles);
 }
 
 // Example usage:
 const books = [
     { title: "Harry Potter", author: "J.K. Rowling", year: 1997 },
     { title: "Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 }
 ];
 
 const logTitles = titles => console.log("Titles in alphabetical order:", titles);
 arrangeAlphabetically(books, logTitles);