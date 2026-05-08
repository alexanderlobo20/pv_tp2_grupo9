export const CambiarParrafo = (contenedor, boton) => {

    const contenidoOriginal = contenedor.innerHTML;

    const contenidoNuevo = `
        <section class="estructuras-condicionales">

            <h2 class="Titulo6">
                Estructuras Condicionales
            </h2>

            <p class="Parrafo6">
                Las estructuras condicionales permiten tomar decisiones dentro de un programa.
                Funcionan evaluando condiciones verdaderas o falsas para ejecutar diferentes bloques de código.
            </p>

            <div class="condicional">

                <strong class="form-control6">if</strong>

                <p>
                    La estructura <span class="codigo6">if</span> ejecuta un bloque de código únicamente si una condición es verdadera.
                </p>

            </div>

            <div class="condicional">

                <strong class="form-control6">else</strong>

                <p>
                    La estructura <span class="codigo6">else</span> se ejecuta cuando la condición del if resulta falsa.
                </p>

            </div>

            <div class="condicional">

                <strong class="form-control6">else if</strong>

                <p>
                    La estructura <span class="codigo6">else if</span> permite evaluar múltiples condiciones.
                </p>

            </div>

            <div class="condicional">

                <strong class="form-control6">switch</strong>

                <p>
                    La estructura <span class="codigo6">switch</span> se utiliza para comparar múltiples valores posibles.
                </p>

            </div>

        </section>
    `;

    let mostrandoCondicionales = false;

    boton.addEventListener("click", () => {

        if (!mostrandoCondicionales) {
            contenedor.innerHTML = contenidoNuevo;
            boton.textContent = "Mostrar repetitivas";
        } else {
            contenedor.innerHTML = contenidoOriginal;
            boton.textContent = "Mostrar condicionales";
        }

        mostrandoCondicionales = !mostrandoCondicionales;
    });
};