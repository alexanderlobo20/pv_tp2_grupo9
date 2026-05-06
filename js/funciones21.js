export const actualizarCapital = (paises, capitales, datos) => {

  const resetPais = "Seleccione un país";
  const resetCapital = "Seleccione una capital";

  const mostrarEnConsola = () => {
    console.log(`País: ${paises.value}\nCapital: ${capitales.value}`);
  };

  const actualizarPorPais = () => {
    const pais = paises.value;

    if (pais === resetPais) {
      capitales.value = resetCapital;
      return;
    }

    const capital = datos[pais];

    if (capital) {
      capitales.value = capital;
    }

    mostrarEnConsola();
  };

  const actualizarPorCapital = () => {
    const capital = capitales.value;

    if (capital === resetCapital) {
      paises.value = resetPais;
      return;
    }

    const paisEncontrado = Object.keys(datos).find(
      pais => datos[pais] === capital
    );

    if (paisEncontrado) {
      paises.value = paisEncontrado;
    }

    mostrarEnConsola();
  };

  paises.addEventListener("change", actualizarPorPais);
  capitales.addEventListener("change", actualizarPorCapital);
};