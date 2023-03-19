/* eslint-disable no-restricted-syntax */
let myLibrary = []
function Book(author, title, pages, memory) {
    this.author = author
    this.title = title
    this.pages = pages
    this.memory = memory
    this.id = myLibrary.length
}

const switcher = function () {
    if (this.value == 1) {
        this.value = 2
        this.textContent = "not read"
        const smth = this.dataset.number
        myLibrary[smth].memory = "not read";
    }
    else if (this.value == 2) {
        this.value = 1
        this.textContent = "read"
        const smth = this.dataset.number
        myLibrary[smth].memory = "read";
    }
}

const table = document.getElementById("table")
const input = document.getElementById("inputOfUser")
const author = document.getElementById("authorInput")
const title = document.getElementById("titleInput")
const pages = document.getElementById("pagesInput")
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
    const filtered = myLibrary.filter(element => element.id != numberOfButton)
    myLibrary = filtered
    const item = document.querySelector(`.books[data-number='${numberOfButton}']`)
    item.remove()
    filtration()
    console.log(filtered);
    // console.log(filtered.indexOf());
    console.log(myLibrary);
    // const filtered = myLibrary.filter(element => element.id !== 1)
    // console.log(myLibrary);
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
    const deleteBook = document.createElement("button")
    deleteBook.innerText = "delete book"
    deleteBook.setAttribute("data-number", number)

    const readButton = document.createElement("button")
    readButton.addEventListener("click", switcher)
    readButton.value = 1
    readButton.textContent = "read or no"
    readButton.setAttribute("data-number", number)

    deleteBook.addEventListener("click", removeBook2)
    table.appendChild(item)
    item.appendChild(bookTitle)
    item.appendChild(bookAuthor)
    item.appendChild(bookPages)
    item.appendChild(deleteBook)
    item.appendChild(readButton)
    // console.log(myLibrary);
}
const checkerOfInput = function () {
    if (author.value == "" || pages.value == "" || title.value == "") {
        return false
    }
    // return result
}
function creatorOfBooks(event) {
    // checkerOfInput()
    if (checkerOfInput() == false) {
        return alert("fill out the fields please")
    }
    checkRead()
    const newBook = new Book(author.value, title.value,
        pages.value, readOrNot)
    myLibrary.push(newBook)
    showBooks()
    event.preventDefault()
    const inputs = document.getElementsByClassName("inputs")
    for (const item of inputs) {
        item.value = ""
    }
}

const submitForm = document.querySelector("#submitForm")
submitForm.addEventListener("click", creatorOfBooks, false)

function openForm() {
    document.getElementById("myForm").style.display = "grid"
}
function closeForm() {
    document.getElementById("myForm").style.display = "none"
}
// let active = false
// function toggle() {
//     // eslint-disable-next-line prefer-const
//     let toggle = document.querySelector(".toggle")
//     // eslint-disable-next-line prefer-const
//     let text = document.querySelector("text")
//     active = !active
//     if (active) {
//         toggle.classList.add("active")
//     }
//     else {
//         toggle.classList.remove("active")
//         text.innerText = "FF"
//     }
// }