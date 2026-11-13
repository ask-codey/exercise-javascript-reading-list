// Tests for books.js. Run them with: node --test
// They call your three functions with books from the Reading List and check what each one returns.
// You don't need to change this file.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateBook, toStorage, fromStorage } from './books.js';

const titleMessage = 'Every book needs a title.';
const pagesMessage = 'Pages must be a whole number, 1 or more.';

const dune = { title: 'Dune', author: 'Frank Herbert', pages: 412, status: 'reading' };
const emma = { title: 'Emma', author: 'Jane Austen', pages: 474, status: 'want-to-read' };
const hobbit = { title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 310, status: 'finished' };

test('validateBook: a book with a title and pages is fine', () => {
  assert.deepEqual(validateBook(dune), {}, 'Dune, 412 pages, has nothing wrong: return {}.');
  assert.deepEqual(validateBook({ title: 'Beowulf', author: '', pages: 1, status: 'want-to-read' }), {},
    'An empty author is fine, and 1 page is enough.');
});

test('validateBook: a book needs a title', () => {
  assert.deepEqual(validateBook({ ...dune, title: '' }), { title: titleMessage },
    'An empty title gets the message under the key title.');
  assert.deepEqual(validateBook({ ...dune, title: '   ' }), { title: titleMessage },
    'A title of only spaces is still empty: trim it before you check.');
});

test('validateBook: pages must be a whole number, 1 or more', () => {
  assert.deepEqual(validateBook({ ...dune, pages: 0 }), { pages: pagesMessage },
    '0 pages (what an empty Pages box gives after Number()) is wrong.');
  assert.deepEqual(validateBook({ ...dune, pages: -5 }), { pages: pagesMessage }, '-5 pages is wrong.');
  assert.deepEqual(validateBook({ ...dune, pages: 2.5 }), { pages: pagesMessage },
    '2.5 pages is wrong: Number.isInteger tells whole numbers apart.');
  assert.deepEqual(validateBook({ ...dune, pages: NaN }), { pages: pagesMessage }, 'NaN pages is wrong.');
});

test('validateBook: every wrong field gets its message', () => {
  assert.deepEqual(validateBook({ title: ' ', author: '', pages: 0, status: 'reading' }),
    { title: titleMessage, pages: pagesMessage }, 'Both fields are wrong, so both messages are there.');
});

test('toStorage: the text to save is a string', () => {
  assert.equal(typeof toStorage([dune]), 'string', 'localStorage keeps only strings: return text.');
  assert.equal(toStorage([]), '[]', 'An empty list is saved as the text [].');
});

test('fromStorage: reads back exactly what toStorage saved', () => {
  const books = [dune, emma, hobbit];
  assert.deepEqual(fromStorage(toStorage(books)), books,
    'Three books saved come back as three books, every field the same.');
});

test('fromStorage: nothing saved yet gives an empty list', () => {
  assert.deepEqual(fromStorage(null), [],
    'On a first visit getItem gives null, and the reading list starts empty.');
});

test('fromStorage: broken text gives an empty list instead of an error', () => {
  assert.deepEqual(fromStorage('[{title: Dune'), [], 'Text that is not JSON gives [], not an error.');
  assert.deepEqual(fromStorage(''), [], 'Empty text gives [].');
});

test('fromStorage: JSON that is not a list gives an empty list', () => {
  assert.deepEqual(fromStorage('{"title":"Dune"}'), [], 'One book on its own is not a list of books.');
  assert.deepEqual(fromStorage('42'), [], 'A number is not a list of books.');
  assert.deepEqual(fromStorage('null'), [], 'The text null is not a list of books.');
});
