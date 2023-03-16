/* eslint-disable no-restricted-syntax */
const myLibrary = []
function Book(author, title, pages, memory) {
    this.author = author
    this.title = title
    this.pages = pages
    this.memory = memory
}

const table = document.getElementById("table")
const input = document.getElementById("inputOfUser")
const author = document.getElementById("authorInput")
const title = document.getElementById("titleInput")
const pages = document.getElementById("titleInput")
const read = document.getElementById("read")
const notRead = document.getElementById("notread")
let readOrNot = ""
function checkRead() {
    if (read.checked) {
        readOrNot = "read"
    }
    else if (notRead.checked) {
        readOrNot = "notread"
    }
}
function creatorOfBooks(event) {
    checkRead()
    const newBook = new Book(author.value, title.value,
        pages.value, readOrNot)
    myLibrary.push(newBook)
    event.preventDefault()
    console.log(newBook);
    console.log(myLibrary);
}
const submitForm = document.querySelector("#showForm")
submitForm.addEventListener("click", creatorOfBooks, false)

function showBooks(event) {
    for (let item of myLibrary) {
        item = document.createElement("div")
        item.setAttribute("class", "books")
        const bookTitle = document.createElement("h3")
        const bookAuthor = document.createElement("p")
        const bookPages = document.createElement("p")
        const deleteBook = document.createElement("button")
        deleteBook.innerText = "delete book"
        table.appendChild(item)
        item.appendChild(bookTitle)
        item.appendChild(bookAuthor)
        item.appendChild(bookPages)
        item.appendChild(deleteBook)
        console.log(item);

    }
    event.preventDefault()
}
function addBookToLibrary() {
    myLibrary.push(input.value)
}
const showBtn = document.querySelector("#showBooks")
showBtn.addEventListener("click", showBooks)
// const addBook = document.getElementById("toAdd")
// addBook.addEventListener("click", addBookToLibrary)


// function openForm() {
    // document.getElementById("myForm").style.display = "block"
// }
// function closeForm() {
    // document.getElementById("myForm").style.display = "none"
// 
// }
// 
// 