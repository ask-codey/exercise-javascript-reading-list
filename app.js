// Connects the Reading List page to the functions in books.js.
// renderBooks is ready to use. The four TODOs are for you to finish: the checklist in README.md says
// what the page should do when they're done.
import { validateBook, toStorage, fromStorage } from './books.js';

const storageKey = 'reading-list';

const form = document.getElementById('add-book');
const bookList = document.getElementById('book-list');
const bookCount = document.getElementById('book-count');

const statusLabels = {
  'want-to-read': 'Want to read',
  reading: 'Reading',
  finished: 'Finished',
};

// Ready to use: draws the whole list from the books array. Call it after every change.
function renderBooks(books) {
  bookList.replaceChildren();

  for (const book of books) {
    const item = document.createElement('li');

    const words = document.createElement('span');
    const author = book.author === '' ? '' : ` by ${book.author}`;
    words.textContent = `${book.title}${author}, ${book.pages} pages`;

    const status = document.createElement('span');
    status.className = `status ${book.status}`;
    status.textContent = statusLabels[book.status];

    item.append(words, status);
    bookList.appendChild(item);
  }

  if (books.length === 0) {
    bookCount.textContent = 'No books yet. Add your first one.';
  } else if (books.length === 1) {
    bookCount.textContent = '1 book on your list';
  } else {
    bookCount.textContent = `${books.length} books on your list`;
  }
}

// TODO 1: load the books saved last time, with localStorage.getItem and fromStorage,
// instead of starting with an empty list.
let books = [];

renderBooks(books);

// TODO 2: show a field's message in the paragraph under it (title-error or pages-error), and mark the
// field with aria-invalid="true". An empty message clears both. You may want a small function for this.

form.addEventListener('submit', (event) => {
  // TODO 3: stop the form being sent, then build a book object from the form's fields:
  // the title and author trimmed, the pages as a number, and the status.

  // TODO 4: check the book with validateBook and show each field's message (or clear it).
  // If anything is wrong, put the cursor in the first wrong field and stop here.
  // Otherwise add the book to the list, save the list with localStorage.setItem and toStorage,
  // draw the list again, empty the form with form.reset(), and put the cursor back in the title box.
});
