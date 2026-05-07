let numeros = [];
let cantidad = parseInt(prompt("Cantidad de números: "));
let suma = 0;

for (let i = 0; i < cantidad; i++) {
    let numero = parseInt(prompt(`Número ${i + 1}: `));
    numeros.push(numero);  
    suma = suma + numero;  
}
let promedio = suma / cantidad;
document.write(`El promedio es: ${promedio}`);