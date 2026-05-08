function duplicar(arreglo) {
  return arreglo.map((num) => num * 2);
}

const cantidad = parseInt(prompt('¿Cuántos números deseas ingresar?'));
const numerosOriginales = [];

for (let i = 0; i < cantidad; i++) {
  let num = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
  numerosOriginales.push(num);
}

const numerosDuplicados = duplicar(numerosOriginales);

console.log('Original:', numerosOriginales);
console.log('Duplicado:', numerosDuplicados);
alert('El nuevo arreglo es: ' + numerosDuplicados.join(', '));
