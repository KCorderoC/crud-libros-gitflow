// Arreglo global de libros
window.books = [];
/*let*/

// Capturamos elementos del DOM
const form = document.getElementById("createBookForm");
const tableBody = document.querySelector("#bookTable tbody");
const btnCreate = document.getElementById("btnCreate");
const btnRead = document.getElementById("btnRead");
const btnUpdate = document.getElementById("btnUpdate");
const btnDelete = document.getElementById("btnDelete");

let selectedIndex = null; // índice del libro seleccionado

// Función global para refrescar la tabla
function refreshTable() {
    tableBody.innerHTML = "";
    if (books.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4" style="text-align:center;">No hay libros registrados</td></tr>`;
        return;
    }
    books.forEach((book, index) => {
        const row = document.createElement("tr");
        row.dataset.index = index; // guardamos índice en el atributo
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.category}</td>
        `;
        tableBody.appendChild(row);
    });
}
btnCreate.addEventListener("click", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const year = document.getElementById("year").value.trim();
    const category = document.getElementById("category").value.trim();

    if (!title || !author || !year || !category) return;

    // --- VALIDACIÓN DE DUPLICADOS ---
    const exists = books.some(book =>
        book.title.toLowerCase() === title.toLowerCase() &&
        book.author.toLowerCase() === author.toLowerCase() &&
        book.year == year &&
        book.category.toLowerCase() === category.toLowerCase()
    );

    if (exists) {
        alert("Este libro ya está registrado.");
        return;
    }

    // Si no existe, lo agregamos
    const book = { title, author, year, category };
    books.push(book);

    refreshTable();
    form.reset();
});