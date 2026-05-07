let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el ultimo número: "));

function SumarRangos(num1, num2) {
if (num1 < num2 || num1 === num2) {
    let suma = 0;
    for (let i = num1; i <= num2; i++) {
        suma += i;
    }
    return suma;
} else {
    document.write("El primer número debe ser menor o igual al segundo número.");
    return null;
}
}

let resultado = SumarRangos(num1, num2);
if (resultado !== null) {
    document.write(`La suma del rango es: ${resultado}`);
}