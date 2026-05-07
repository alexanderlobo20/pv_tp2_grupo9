let parrafo = document.getElementById("Texto1");
let inputTexto = document.getElementById("inputTexto");
function MostrarParrafor (){
    inputTexto.addEventListener("input", function() {
        parrafo.textContent = inputTexto.value;
    });
}
MostrarParrafor(inputTexto, parrafo);