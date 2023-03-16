/* eslint-disable no-restricted-syntax */
const myLibrary = []
function Book(name) {
    this.name = name
}
const table = document.getElementById("table")
const input = document.getElementById("inputOfUser")
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
showForm.addEventListener("click", showBooks, false)
