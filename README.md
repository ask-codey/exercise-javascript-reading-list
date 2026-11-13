# Exercise: Reading List

Exercise code for the lesson **Exercise: Reading List** in JavaScript in Depth on [ask-codey.com](https://www.ask-codey.com).

My Reading List is a page where a reader keeps track of books: the ones they want to read, the one they're reading, and the ones they've finished. The page and its look are done. You'll write the JavaScript that makes it work: it reads the add-book form, refuses a book with no title or with 0 pages (with a message next to the field), adds the book to the list, and remembers the list between visits with localStorage.

## Before you start

You need Node.js 24 or later (in a terminal, `node --version` should print `v24` or higher), and VS Code with the Live Preview extension to open the page.

## What's here

- `index.html`, `styles.css`: the page and its look. Ready to use.
- `books.js`: three functions that check a book and turn the list into text and back, with no page involved. Each one gives back `null` or `''` for now. The comment above each one says what it should give back, with examples. For you to finish.
- `app.js`: connects the page to those functions. It already draws the list (`renderBooks`). Its four TODO comments are for you to finish.
- `books.test.js`: tests that call the functions in `books.js`. You don't need to change this file.
- `package.json`: tells Node that these files use `import` and `export`. Ready to use.

## What to do

Open the folder in VS Code, then open a terminal there (**Terminal > New Terminal**).

1. Finish `books.js`, running the tests as you go:

   ```bash
   node --test
   ```

   At first every test fails: that's expected. Each function you finish turns its tests green. A failing test's message says what it expected, for example *A title of only spaces is still empty: trim it before you check.*

2. Finish the TODOs in `app.js`. Open `index.html` with Live Preview (right-click it, **Show Preview**, or **Live Preview: Show Preview (External Browser)** for the developer tools), and work through the checklist below. Press **F12** and look at the **Console** when something doesn't work.

## Checklist for the page

- [ ] Adding *Dune* by *Frank Herbert*, 412 pages, *Reading*, puts it on the list with a *Reading* label, shows *1 book on your list*, and empties the form. The page doesn't reload.
- [ ] After a book is added, the cursor is back in the Title box, ready for the next one.
- [ ] Adding a book with an empty title, or a title of only spaces, adds nothing and shows *Every book needs a title.* under the Title box, which gets a red border. The cursor goes to the Title box.
- [ ] Adding a book with the Pages box empty, or with 0, adds nothing and shows *Pages must be a whole number, 1 or more.* under the Pages box.
- [ ] With both wrong, both messages show, and the cursor goes to the Title box.
- [ ] Fixing a field and adding the book again clears its message and its red border.
- [ ] A book with no author shows as *Beowulf, 182 pages*, with no "by".
- [ ] Reload the page: every book is still there. Close the browser, open the page again: still there.
- [ ] In the developer tools, **Application** (or **Storage** in Firefox) > **Local storage** shows one key, `reading-list`, holding the list as JSON text.
- [ ] Delete that key in the developer tools and reload: the page starts empty, with *No books yet. Add your first one.*, and no error in the Console.
- [ ] Change that key's value to some broken text, such as `[{oops`, and reload: the page starts empty, with no error in the Console.

## Tips

- `Number(fields.pages.value)` turns the Pages box's text into a number. An empty box gives `0`, which `validateBook` already refuses.
- `validateBook` gives back an object such as `{ title: 'Every book needs a title.' }`. `errors.title` is the title's message, or `undefined` when the title is fine; `errors.title ?? ''` turns that into a message to show or an empty one.
- `form.elements.title` finds the Title box by its name, and `document.getElementById('title-error')` its message paragraph.
- `form.reset()` puts every field back the way the page started.
- Stuck on a test? Read its message, then the comment above the function: the examples there are the tests' examples.

## Want more?

Once every box is ticked, try one of these. They have no tests: the page is your check.

- Give each book a **Remove** button. One listener on the whole list, with `event.target.closest('li')`, can handle every button.
- Let a click on a book's label move it to the next status: *Want to read*, then *Reading*, then *Finished*.
- Show how many pages you've finished in total, under the count.

## Hand it in

When it works, put your solution in a public repo of your own on GitHub, then paste that repo's address into **Submit your exercise** on the lesson page at [ask-codey.com](https://www.ask-codey.com). That's what completes the lesson. You don't need Git: create the repo on GitHub, choose **Add file**, then **Upload files**, and upload everything in this folder. The lesson page shows each step, and the lesson *Put Your Code on GitHub* walks through every screen.
