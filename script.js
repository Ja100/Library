

function Book(title,author,page,readStatus){
    if(!new.target){
        throw Error('a constructor has to be called with new operator!!!')
    }
    // this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.page = page;
    this.readStatus = readStatus;
}

let myLibrary = [
    new Book('The Seven Husbands of Evelyn Hugo', 'Taylor Jenkins', 134, 'Yes'),
    new Book('The House in the Cerulean Sea', 'T.J. Klune', 203, 'Yes'),
    new Book('The Catcher in the Rye', 'J.D. Salinger', 191, 'No'),
    new Book('Life of Pi', 'Yann Martel', 126, 'Yes'),
];

function createBook(title,author,pages,readStatus){
    const newBook = new Book(title, author, pages, readStatus)
    myLibrary.push(newBook);
}

// DOM Section

function DisplayBook() {
    let table = document.createElement('table');

let tableHead =  document.createElement('thead')
let headerRow =  document.createElement('tr');
const headers = Object.keys(myLibrary[0]);

headers.forEach(headerText => {
    let th = document.createElement('th')
    th.textContent = headerText.charAt(0).toLocaleUpperCase() + headerText.slice(1);
    headerRow.appendChild(th);
});
tableHead.appendChild(headerRow);


// Table Data rows 

let tableBody = document.createElement('tbody');

myLibrary.forEach(Book => {
    let row = document.createElement('tr');
    Object.values(Book).forEach(value =>{
        let td = document.createElement('td');
        td.textContent = value;
        row.appendChild(td);
    })
    
    tableBody.appendChild(row)
});

table.appendChild(tableBody)
table.appendChild(tableHead)
document.body.appendChild(table);
}
DisplayBook();


const dialog =  document.querySelector('dialog');
const addNewBookBtn =  document.querySelector('button');
const confirmBtn =  document.querySelector('#confirmBtn');
const title = document.getElementById('bookTitle');
const page = document.getElementById('pages');
const author = document.getElementById('bookAuthor')
// const readStatus = document.querySelectorAll('input[name="readStatus"]');
const output = document.querySelector('output')

addNewBookBtn.addEventListener('click', () =>{
    dialog.showModal();
})

dialog.addEventListener("close", (e) => {
    output.value = 
    dialog.returnValue === "default" ? "No return value" : `Read Status: ${dialog.returnValue}.`;
})

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault(); //form data will not be sent in a server
    dialog.close();
})



// Form Creation 

// const form = document.createElement('form');
//  form.action = '#';
//  form.method = 'post';

// // Title
// const titleLabel =  document.createElement('label');
// titleLabel.htmlFor = 'title'
// titleLabel.textContent = 'Title: ',





