let numeros = [];
let cantidad = parseInt(prompt("Cantidad de números: "));
let suma = 0;
for (let i = 0; i < cantidad; i++) {
    let numero = parseInt(prompt(`Número ${i + 1}: `));
    numeros.push(numero);  
    suma = suma + numero;  
}
function MostrarArreglo(numeros) {
    document.write(`Números ingresados: ${numeros.join(", ")}`);
}
MostrarArreglo(numeros);