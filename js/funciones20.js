export const mostrarDatos = () => {

    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const libreta = document.querySelector("#libreta");

    const valorNombre = nombre.value;
    const valorApellido = apellido.value;
    const valorLibreta = libreta.value;

   alert(`Los datos ingresados son:
Nombre: ${valorNombre}
Apellido: ${valorApellido}
Libreta Universitaria: ${valorLibreta}`);
};