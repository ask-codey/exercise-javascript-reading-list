// The Reading List's rules: five functions for you to finish.
// None of them touches the page, so the tests can check them with Node. app.js uses them on the page.
//
// A book is an object like this one. Its pages are already a number: app.js converts them.
//   { title: 'Dune', author: 'Frank Herbert', pages: 412, status: 'reading' }
// status is one of 'want-to-read', 'reading' or 'finished'.

// 1. validateBook(book)
//    Return an object with a message for each field that's wrong, or an empty object, {}, when the book is fine.
//    - The title is wrong when it's empty or only spaces. Its message: 'Every book needs a title.'
//    - The pages are wrong unless they're a whole number, 1 or more (0, -5, 2.5 and NaN are all wrong).
//      Their message: 'Pages must be a whole number, 1 or more.'
//    - The author may be empty: some books don't have one you know.
//
//    validateBook({ title: 'Dune', author: 'Frank Herbert', pages: 412, status: 'reading' })
//      -> {}
//    validateBook({ title: '   ', author: '', pages: 412, status: 'reading' })
//      -> { title: 'Every book needs a title.' }
//    validateBook({ title: '', author: '', pages: 0, status: 'want-to-read' })
//      -> { title: 'Every book needs a title.', pages: 'Pages must be a whole number, 1 or more.' }
export function validateBook(book) {
  return null;
}

// 2. toStorage(books)
//    Return the text to save in localStorage for this array of books: text that fromStorage can turn
//    back into the same array.
//    toStorage([]) -> '[]'
export function toStorage(books) {
  return '';
}

// 3. fromStorage(saved)
//    saved is what localStorage.getItem gave back. Return the array of books it holds.
//    - Nothing saved yet: getItem gave null. Return an empty array, [].
//    - Text that isn't JSON (someone edited it by hand): return [].
//    - JSON that isn't an array, such as '{"title":"Dune"}' or '42': return [].
//
//    fromStorage(toStorage(books)) -> an array equal to books
//    fromStorage(null) -> []
//    fromStorage('[{title: Dune') -> []
export function fromStorage(saved) {
  return null;
}

// 4. toBackup(books)
//    Return the text for a backup file of this list: JSON with each book's properties on their own lines,
//    indented by 2 spaces, so the file is easy to read if someone opens it. fromBackup turns it back into the list.
//    toBackup([{ title: 'Dune', pages: 412 }]) ->
//      [
//        {
//          "title": "Dune",
//          "pages": 412
//        }
//      ]
export function toBackup(books) {
  return '';
}

// 5. fromBackup(text)
//    text is what a backup file holds. Return the list of books in it, or null when it isn't a backup, so the
//    page can keep the list it has instead of losing it (unlike fromStorage, which starts an empty list).
//    - Text that isn't JSON, such as 'Milk, eggs, bread': null.
//    - JSON that isn't an array, such as '{"title":"Dune"}' or '42': null.
//    - An array with a book whose title isn't a string, such as '[{"pages":3}]': null.
//    - '[]' is a backup of an empty list: [].
//
//    fromBackup(toBackup(books)) -> an array equal to books
//    fromBackup('Milk, eggs, bread') -> null
export function fromBackup(text) {
  return [];
}
