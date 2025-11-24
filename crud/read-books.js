const btnReadToggle = document.getElementById("btnRead");
const table = document.getElementById("bookTable");

let visible = true;

btnReadToggle.addEventListener("click", () => {
    refreshTable();

    if (visible) {
        table.style.display = "none";
        btnReadToggle.textContent = "Mostrar";
    } else {
        table.style.display = "table";
        btnReadToggle.textContent = "Ocultar";
    }

    visible = !visible;
});
