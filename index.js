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
const books = document.getElementsByClassName("books")
function removeBook() {
    let number = Number(this.value)
    number -= 1
    delete myLibrary[number]
    myLibrary.length -= 1
    books[number].remove()
    console.log(myLibrary.length);
    // console.log(books[1]);
    // console.log(typeof myLibrary);
}
function ChangeLength() {
    if (myLibrary.length == 0) {
        myLibrary.length += 1
    } else {
        myLibrary.length -= 1
    }
}

function showBooks() {
    const item = document.createElement("div")
    item.setAttribute("class", "books")
    item.setAttribute("datax-number", myLibrary.length)
    const bookTitle = document.createElement("h3")
    const bookAuthor = document.createElement("p")
    const bookPages = document.createElement("p")
    const deleteBook = document.createElement("button")
    deleteBook.innerText = "delete book"
    deleteBook.setAttribute("data-number", myLibrary.length)
    deleteBook.value = myLibrary.length
    console.log("library length is ", `${myLibrary.length}`);
    deleteBook.addEventListener("click", removeBook)
    table.appendChild(item)
    item.appendChild(bookTitle)
    item.appendChild(bookAuthor)
    item.appendChild(bookPages)
    item.appendChild(deleteBook)
    // console.log(myLibrary[0]);
}
// function empty() {
//     if (author.value == "" || title.value == "" || pages.value == "") {
//         return alert("did not enter")
//     }
// }
function creatorOfBooks(event) {
    checkRead()
    const newBook = new Book(author.value, title.value,
        pages.value, readOrNot)
    myLibrary.push(newBook)
    showBooks()
    event.preventDefault()
}
function cleanTable() {

}
const submitForm = document.querySelector("#submitForm")
submitForm.addEventListener("click", creatorOfBooks, false)

function openForm() {
    document.getElementById("myForm").style.display = "grid"
}
function closeForm() {
    document.getElementById("myForm").style.display = "none"
}
