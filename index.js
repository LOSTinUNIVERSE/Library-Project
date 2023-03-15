/* eslint-disable no-restricted-syntax */
const myLibrary = []
function Book(name) {
    this.name = name
}
const table = document.getElementById("table")
const input = document.getElementById("inputOfUser")
function showBooks(books) {
    for (let item of myLibrary) {
        item = document.createElement("div")
        item.textContent = input.value
        table.appendChild(item)
        item.setAttribute("class", "books")
        console.log(item);

    }
}
// function createCard() {
//     const book = document.createElement("div")
//     book.textContent = input.value
//     table.appendChild(book)
//     book.setAttribute("class", "books")
// }
function addBookToLibrary() {
    myLibrary.push(input.value)
    // console.log(myLibrary);
    // createCard()
}
const showBtn = document.querySelector("#showBooks")
showBtn.addEventListener("click", showBooks)
const btn = document.getElementById("toAdd")
btn.addEventListener("click", addBookToLibrary)
