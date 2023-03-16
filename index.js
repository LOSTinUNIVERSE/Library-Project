/* eslint-disable no-restricted-syntax */
const myLibrary = []
function Book(author, title, pages) {
    this.author = author
    this.title = title
    this.pages = pages
}

const table = document.getElementById("table")
const input = document.getElementById("inputOfUser")
const author = document.getElementById("authorInput")
const title = document.getElementById("titleInput")
const pages = document.getElementById("titleInput")
const read = document.getElementById("read")
const notRead = document.getElementById("notread")
function checkRead() {
    if (read.checked) {
        read.value = "read"
    }
    else if (notRead.checked) {
        notRead.value = "notread"
    }
}
function creatorOfBooks(event) {
    const newBook = new Book(author.value, title.value, pages.value)
    myLibrary.push(newBook)
    event.preventDefault()
    console.log(read.checked);
}

function showBooks(event) {
    for (let item of myLibrary) {
        item = document.createElement("div")
        item.textContent = input.value
        table.appendChild(item)
        item.setAttribute("class", "books")
        console.log(item);

    }
    event.preventDefault()
}
function addBookToLibrary() {
    myLibrary.push(input.value)
}
const showBtn = document.querySelector("#showBooks")
showBtn.addEventListener("click", showBooks)
const addBook = document.getElementById("toAdd")
addBook.addEventListener("click", addBookToLibrary)


function openForm() {
    document.getElementById("myForm").style.display = "block"
}
function closeForm() {
    document.getElementById("myForm").style.display = "none"

}
const showForm = document.querySelector("#showForm")
showForm.addEventListener("click", creatorOfBooks, false)

