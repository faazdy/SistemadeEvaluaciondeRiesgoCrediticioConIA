import "./inicio.css";
import Navbar from "../../components/navbar/navbar";
import Riesgo from "../../components/tipoRiesgo/riesgo";

function Inicio() {
  return (
    <div>
      <Navbar />
      <div class="contenedorIA">
        <article class="IAtext">
          <p class="ParrafoIA">
            ¿Estás listo para descubrir tu nivel crediticio? Te presentamos a
            Laurita, una inteligencia artificial diseñada para ayudarte a
            evaluar tu nivel de riesgo financiero. Gracias a su capacidad de
            análisis, Laurita te hará unas preguntas sencillas y, con base en
            tus respuestas, te ofrecerá una evaluación precisa. Así podrás tomar
            decisiones importantes en tu vida con mayor seguridad. ¡Ella se
            encarga del análisis por ti!
          </p>
        </article>
        <div class="recuadroIA">
          <h2>Laurita</h2>

          <input type="text" class="imputIA" />
        </div>
      </div>
      <div>
        <Riesgo>hola mundo</Riesgo>
      </div>
    </div>
  );
}

export default Inicio;
