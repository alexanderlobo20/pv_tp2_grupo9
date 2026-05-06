export const manejarRadio = (radios, resultado) => {

  radios.forEach(radio => {
    radio.addEventListener("change", () => {

      const valor = radio.value;

      // Muestra en pantalla
      resultado.textContent = `Seleccionaste: ${valor}`;

      console.log(`Lenguaje seleccionado: ${valor}`);

      // Activa animación
      resultado.classList.add("activo");

      setTimeout(() => {
        resultado.classList.remove("activo");
      }, 300);
    });
  });
}