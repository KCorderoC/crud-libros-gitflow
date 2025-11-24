// --- SELECCIÓN DE FILA ---
tableBody.addEventListener("click", (e) => {
    const row = e.target.closest("tr");
    if (!row || row.querySelectorAll("td").length === 0) return;

    selectedIndex = parseInt(row.dataset.index);

    // Llenamos el formulario
    document.getElementById("title").value = books[selectedIndex].title;
    document.getElementById("author").value = books[selectedIndex].author;
    document.getElementById("year").value = books[selectedIndex].year;
    document.getElementById("category").value = books[selectedIndex].category;
});

// --- EDITAR ---
btnUpdate.addEventListener("click", () => {
    if (selectedIndex === null) {
        alert("Selecciona un libro de la tabla primero.");
        return;
    }

    books[selectedIndex].title = document.getElementById("title").value.trim() || books[selectedIndex].title;
    books[selectedIndex].author = document.getElementById("author").value.trim() || books[selectedIndex].author;
    books[selectedIndex].year = document.getElementById("year").value.trim() || books[selectedIndex].year;
    books[selectedIndex].category = document.getElementById("category").value.trim() || books[selectedIndex].category;

    refreshTable();
    form.reset();
    selectedIndex = null;
});
