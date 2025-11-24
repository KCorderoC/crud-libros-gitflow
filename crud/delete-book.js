// --- ELIMINAR ---
btnDelete.addEventListener("click", () => {
    if (selectedIndex === null) {
        alert("Selecciona un libro de la tabla primero.");
        return;
    }

    const confirmDelete = confirm(`¿Seguro que deseas eliminar "${books[selectedIndex].title}"?`);
    if (!confirmDelete) return;

    books.splice(selectedIndex, 1);
    refreshTable();
    form.reset();
    selectedIndex = null;
});
