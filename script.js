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
    this.readStatus = !this.readStatus;
}

let myLibrary = [
    new Book('The Seven Husbands of Evelyn Hugo', 'Taylor Jenkins', 134, 'Yes'),
    new Book('The House in the Cerulean Sea', 'T.J. Klune', 203, 'Yes'),
    new Book('The Catcher in the Rye', 'J.D. Salinger', 191, 'No'),
    new Book('Life of Pi', 'Yann Martel', 126, 'Yes'),
];



function createBook(id,title,author,pages,readStatus){
    const newBook = new Book(id,title, author, pages, readStatus)
    
    myLibrary.push(newBook);
}




// DOM Section

function displayBook() {
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
    myLibrary.forEach((book, index) => {
        let row = document.createElement('tr');
        
        row.dataset.row = "book-information";
            
        Object.values(book).forEach(value =>{
            let td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });

        let actionTd = document.createElement('td')            
        let changeBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');
                
        deleteBtn.textContent = 'Delete'
        changeBtn.textContent = 'Change'
        changeBtn.classList.add('change-btn');
        deleteBtn.classList.add('delete-btn');

        deleteBtn.setAttribute('data-index', `${index}`);
        changeBtn.setAttribute('data-index', `${index}`);
        
        actionTd.appendChild(deleteBtn);
        actionTd.appendChild(changeBtn);
        row.appendChild(actionTd)
        
        tableBody.appendChild(row)

    });

table.appendChild(tableBody);
tableContainer.appendChild(table);
    
   
table.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-btn')){
        const index = parseInt(e.target.dataset.index);
        myLibrary.splice(index, 1);
        displayBook();   
    }
});

table.addEventListener('click', function(event){
    //
})

}

displayBook();


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

    // const id = crypto.randomUUID();
    const titleInput = document.getElementById('bookTitle').value;
    const pageInput = document.getElementById('pages').value;
    const authorInput = document.getElementById('bookAuthor').value;
    const readStatusInput = document.querySelector('input[name="readStatus"]:checked').value;


    if( authorInput && titleInput && pageInput){
        myLibrary.push({
            // id : id,
            title: titleInput,
            author: authorInput,
            page: pageInput,
            readStatus: readStatusInput
        });
        
        displayBook();
        

        dialog.close();

        document.getElementById('bookTitle').value = "";
        document.getElementById('pages').value = "";
        document.getElementById('bookAuthor').value = "";
        document.querySelector('input[name="readStatus"]:checked').checked = "";
    }

}); 
