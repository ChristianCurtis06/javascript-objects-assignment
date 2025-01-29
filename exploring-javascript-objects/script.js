// Task 1: Create a constructor function for the Book object with properties for title, author, and pages
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Task 2: Implement a method within the Book object to display book information
Book.prototype.displayBook = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
}

// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author
let books = [];

function addBook(title, author, pages, books) {
    let book = new Book(title, author, pages);
    books.push(book);
    console.log(`${title} added to library!`);
}

function searchByTitle(title, books) {
    for (let book of books) {
        if (book.title === title) {
            book.displayBook();
            return;
        }
    }

    console.log(`${title} not found in library.`);
}

function searchByAuthor(author, books) {
    let found = false;
    
    for (let book of books) {
        if (book.author === author) {
            found = true;
            book.displayBook();
        }
    }

    if (found == false) {
        console.log(`Books by ${author} not found in library.`);
    }
}

addBook("1984", "George Orwell", 304, books);
addBook("Animal Farm", "George Orwell", 100, books);
addBook("To Kill a Mockingbird", "Harper Lee", 281, books);

searchByTitle("1984", books);
searchByAuthor("George Orwell", books);

// Task 4: Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably
function filterShortStory(pageLimit, books) {
    let shortStories = books.filter(book => book.pages <= pageLimit);
    return shortStories;
}

function updateTitleAuthor(books) {
    books.map(book => {
        book.title = "Title: " + book.title;
        book.author = "Author: " + book.author;
    });
    return books;
}

let shortStories = filterShortStory(100, books);
if (shortStories) {
    console.log("Short Stories:");
    for (shortStory of shortStories) {
        shortStory.displayBook();
    }
} else {
    console.log("Short stories not found in library.");
}

books = updateTitleAuthor(books);