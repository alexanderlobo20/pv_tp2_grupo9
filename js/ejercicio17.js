function contarLetraA(texto) {
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    // Convertimos a minúscula para contar 'a' y 'A'
    if (texto[i].toLowerCase() === 'a') {
      contador++;
    }
  }
  return contador;
}

const frase = prompt('Ingresa una palabra o frase:');
const resultado = contarLetraA(frase);

console.log(`La letra 'a' aparece ${resultado} veces.`);
alert(`La letra 'a' aparece ${resultado} veces.`);
