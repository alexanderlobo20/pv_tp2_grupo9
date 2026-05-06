export const cambiarColorFondo = (boton, colores) => {

  boton.addEventListener("click", () => {

    // Color aleatorio
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    // Cambia fondo
    document.body.style.backgroundColor = colorAleatorio;

    console.log(`Color cambiado a: ${colorAleatorio}`);
  });

}