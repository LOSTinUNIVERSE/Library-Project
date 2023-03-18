/* eslint-disable no-restricted-syntax */
let myLibrary = []
function Book(author, title, pages, memory) {
    this.author = author
    this.title = title
    this.pages = pages
    this.memory = memory
    this.id = myLibrary.length
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
function filtration() {
    myLibrary = myLibrary.filter(item => {
        if (Object.keys(item).length !== 0) {
            return true
        }
        return true
    })
}



function removeBook2() {
    // document.getElementsByClassName(".books")
    // console.log(this.dataset.number);
    // delete myLibrary[this.dataset.number]
    const numberOfButton = this.dataset.number
    const item = document.querySelector(`.books[data-number='${numberOfButton}']`)
    const itemToDelete = myLibrary.filter(element => element.id !== 1)
    console.log(itemToDelete);
    item.remove()
    filtration()
}
function showBooks(event) {
    const item = document.createElement("div")
    item.setAttribute("class", "books")
    let number = myLibrary.length
    number -= 1
    item.setAttribute("data-number", number)
    // console.log(`data set number is ${item.dataset.number}`);
    const bookTitle = document.createElement("h3")
    bookTitle.textContent = title.value
    const bookAuthor = document.createElement("p")
    bookAuthor.textContent = author.value
    const bookPages = document.createElement("p")
    bookPages.textContent = pages.value
    bookPages.textContent = number
    const deleteBook = document.createElement("button")
    deleteBook.innerText = "delete book"
    deleteBook.setAttribute("data-number", number)

    deleteBook.addEventListener("click", removeBook2)
    table.appendChild(item)
    item.appendChild(bookTitle)
    item.appendChild(bookAuthor)
    item.appendChild(bookPages)
    item.appendChild(deleteBook)
}
function creatorOfBooks(event) {
    checkRead()
    const newBook = new Book(author.value, title.value,
        pages.value, readOrNot)
    myLibrary.push(newBook)
    showBooks()
    event.preventDefault()
}

const submitForm = document.querySelector("#submitForm")
submitForm.addEventListener("click", creatorOfBooks, false)

function openForm() {
    document.getElementById("myForm").style.display = "grid"
}
function closeForm() {
    document.getElementById("myForm").style.display = "none"
}
