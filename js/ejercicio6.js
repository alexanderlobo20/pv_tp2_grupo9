let edades = [18, 22, 30, 25, 40, 35, 28, 21];
let suma = 0;

// Recorre array
for (let i = 0; i < edades.length; i++) {
    console.log("Edad:", edades[i]);
    suma += edades[i];
}

// Calcula promedio
let promedio = suma / edades.length;

// Muestra promedio
console.log("Promedio de edades:", promedio);