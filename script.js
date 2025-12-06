

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

Book.prototype.toggleRead = function() {
    this.readStatus = !this.readStatus
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
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    let table = document.createElement('table');


let tableHead =  document.createElement('thead')
let headerRow =  document.createElement('tr');
const headers = Object.keys(myLibrary[0]);

headers.forEach(headerText => {
    let th = document.createElement('th')
    th.textContent = headerText.charAt(0).toLocaleUpperCase() + headerText.slice(1);
    headerRow.appendChild(th);
});

let actionTh = document.createElement('th');
actionTh.textContent = "Actions"
headerRow.appendChild(actionTh)
tableHead.appendChild(headerRow);
table.appendChild(tableHead);



// Table Data rows 

let tableBody = document.createElement('tbody');
myLibrary.forEach(Book => {
    let row = document.createElement('tr');
    Object.values(Book).forEach(value =>{
        let td = document.createElement('td');
        td.textContent = value;
        row.appendChild(td);
    })

    let actionTd = document.createElement('td')
    // let deleteSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>';
    
    let changeBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');
    deleteBtn.className.add
    
    deleteBtn.textContent = 'Delete'
    changeBtn.textContent = 'Change'

    tableContainer.addEventListener('click',(e) => {
        const id = e.target.ParentElement.id;
        if(deleteBtn){
            const index = myLibrary.findIndex((book)=> book.id === id);
            if(index !== -1){
                myLibrary.splice(index, 1);
                DisplayBook();
            }
        }

        if (changeBtn){
            const togBook = myLibrary.find((book) => book.id === id);
            if(togBook){
                togBook.toggleRead();
                DisplayBook();
            }
        }
    })

    actionTd.appendChild(deleteBtn);
    actionTd.appendChild(changeBtn);
    row.appendChild(actionTd)
    
    tableBody.appendChild(row)
});

table.appendChild(tableBody)

tableContainer.appendChild(table);
document.body.appendChild(tableContainer)
}
DisplayBook();



const dialog =  document.querySelector('dialog');
const addNewBookBtn =  document.querySelector('button');
const confirmBtn =  document.querySelector('#confirmBtn');

addNewBookBtn.addEventListener('click', () =>{
    dialog.showModal();
})

// dialog.addEventListener("close", (e) => {
    
// })

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault(); //form data will not be sent in a server

    const titleInput = document.getElementById('bookTitle').value;
    const pageInput = document.getElementById('pages').value;
    const authorInput = document.getElementById('bookAuthor').value;
    const readStatusInput = document.querySelector('input[name="readStatus"]:checked').value;

    if( authorInput && titleInput && authorInput){
        myLibrary.push({
            title: titleInput,
            author: authorInput,
            page: pageInput,
            readStatus: readStatusInput
        });
        
        DisplayBook();
        

        dialog.close();

        document.getElementById('bookTitle').value = "";
        document.getElementById('pages').value = "";
        document.getElementById('bookAuthor').value = "";
    }

    
})
const authorBook = document.querySelector('bookAuthor')
console.log(authorBook.dataset.name);






