import { actualizarCapital } from "./funciones21.js";

const paises = document.getElementById("paises");
const capitales = document.getElementById("capitales");

const datos = {
  "Seleccione un país": "Seleccione una capital",
  "Argentina": "Buenos Aires",
  "Brasil": "Brasilia",
  "Chile": "Santiago",
  "Perú": "Lima",
  "México": "Ciudad de México",
  "Colombia": "Bogotá"
};

actualizarCapital(paises, capitales, datos);