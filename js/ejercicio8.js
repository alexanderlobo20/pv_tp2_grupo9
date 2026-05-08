console.log('***** Ejercicio 8 *****');
console.log();

const notas = [8, 5, 9, 4, 6, 7, 10, 3, 2, 6];

console.log('-Notas');
notas.forEach((nota, i) => console.log(`   Nota ${i + 1}: ${nota}`));

const aprobadas = notas.filter((nota) => nota >= 6);
console.log(`-Notas aprobadas: ${aprobadas}`);

const desaprobadas = notas.filter((nota) => nota < 6);
console.log(`-Notas desaprobadas: ${desaprobadas}`);

const suma = notas.reduce((acc, nota) => acc + nota, 0);
const promedio = suma / notas.length;
console.log(`-Promedio general: ${promedio.toFixed(2)}`);

console.log(`-Cantidad de aprobadas: ${aprobadas.length}`);
