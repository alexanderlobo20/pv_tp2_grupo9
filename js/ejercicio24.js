import { manejarRadio } from "./funciones24.js";

const radios = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.getElementById("resultado");

manejarRadio(radios, resultado);