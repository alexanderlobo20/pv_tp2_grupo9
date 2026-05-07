let nombres = ["Pablo", "Fernando", "Juan", "Daiana", "Marianela", "Sofía"];
let mayor;

for (let i = 0; i < nombres.length; i++) {
    if (i === 0) {
        mayor = nombres[i];
    } else if (nombres[i].length > mayor.length) {
        mayor = nombres[i];
    }
}

console.log(`El nombre con más caracteres es: ${mayor}`);