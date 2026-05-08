export const MostrarParrafo = (inputTexto, parrafo) => {
    inputTexto.addEventListener("input", function () {
        parrafo.textContent = inputTexto.value;
    });
}