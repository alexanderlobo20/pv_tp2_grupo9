export const mostrarTexto = () => {

    const input = document.querySelector("#textoUsuario");
    const resultado = document.querySelector("#resultado");
    const texto = input.value;

    if (texto.length === 0) {
        resultado.textContent = "El texto aparecerá aquí...";
        resultado.style.backgroundColor = "#e9ecef";
        return;
    }

    resultado.textContent = texto;

    if (texto.length > 20) {
        resultado.style.backgroundColor = "#ff7575";
    } else {
        resultado.style.backgroundColor = "#e9ecef";
    }
};