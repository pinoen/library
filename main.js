let books = [];

class Book {
  constructor(code, title, author, pages, isRead) {
    this.code = code;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

// Usage example:
// let martin = new Book('Martin Fierro', 'Jose Hernandez', 458, true);

let codigo = document.querySelector('#code');
let titulo = document.querySelector('#title')
let autor = document.querySelector('#author')
let paginas = document.querySelector('#pages')
let leido = document.querySelector('#yes')
let lista = document.querySelector('.list')
let formulario = document.querySelector('form');


document.addEventListener('submit', (e) => {
  e.preventDefault()
  books.push(new Book(codigo.value, titulo.value, autor.value, paginas.value, leido.checked))
  formulario.reset()
  lista.innerHTML = ''
  renderBook(books)

})

function renderBook(arr) {
  arr.forEach(item => {

    lista.innerHTML += `
      <div class="book">
        <h4>Code: ${item.code}</h4>
        <h3>Title: ${item.title}</h3>
        <p>Author: ${item.author}</p>
        <p>Number of Pages: ${item.pages}</p>
        <p>Have you read it? ${item.isRead ? 'Yes' : 'No'}</p>
        <button class='delete' id='${item.code}'>Delete</button>
    </div>
      `


    // let borrar = document.querySelector(`#${item.code}`);

    // borrar.addEventListener('click', () => {
    //   let padre = borrar.parentElement;
    //   console.log(padre)
    // })
  });
}