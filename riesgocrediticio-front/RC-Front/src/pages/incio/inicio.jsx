import "./inicio.css";
import Navbar from "../../components/navbar/navbar";
import Riesgo from "../../components/tipoRiesgo/riesgo";

function Inicio() {
  return (
    <div>
      <Navbar />
      <div class="inicio-ContIA">
        <article class="inicio-IATxt">
          <p class="inicio-ParIA">
            ¿Estás listo para descubrir tu nivel crediticio? Te presentamos a
            Laurita, una inteligencia artificial diseñada para ayudarte a
            evaluar tu nivel de riesgo financiero. Gracias a su capacidad de
            análisis, Laurita te hará unas preguntas sencillas y, con base en
            tus respuestas, te ofrecerá una evaluación precisa. Así podrás tomar
            decisiones importantes en tu vida con mayor seguridad. ¡Ella se
            encarga del análisis por ti!
          </p>
        </article>
        <div class="inicio-RecIA">
          <h2>Laurita</h2>

          <input type="text" class="inicio-IptIA" />
        </div>
      </div>
      <h3 class="inicio-TpsRiesgo">Tipos De Riesgo</h3>
      <div className="inicio-CrRsgos">
        <Riesgo>
          <h3>1 Riesgo Bajo (Excelente)</h3>
          <br />
          <p>
            Persona con excelente historial crediticio. Paga a tiempo, tiene
            deudas controladas y un buen puntaje. Probabilidad de
            incumplimiento: Muy baja.
            <br /> “¡Felicidades! Eres un ejemplo a seguir. Tu futuro es
            brillante.”
          </p>
        </Riesgo>
        <Riesgo>
          <h3>2 Riesgo Moderado (Bueno)</h3>
          <br />
          <p>
            Descripción: Tiene un buen historial, aunque con algún pequeño
            retraso ocasional. Manejo adecuado de sus finanzas. Probabilidad de
            incumplimiento: Baja. <br />
            <br /> “Vas por buen camino. Aún puedes mejorar y llegar más lejos.”
          </p>
        </Riesgo>
        <Riesgo>
          <h3>3 Riesgo Medio (Regular)</h3>
          <br />
          <p>
            Descripción: Tiene antecedentes de pagos atrasados o uso excesivo
            del crédito, pero no está en situación crítica. Probabilidad de
            incumplimiento: Moderada. <br />
            <br /> “Hay potencial, pero cuidado. Es hora de tomar decisiones
            inteligentes.”
          </p>
        </Riesgo>
        <Riesgo>
          <h3>4 Riesgo Alto (Malo)</h3>
          <br />
          <p>
            Descripción: Historial con múltiples retrasos, moras o deudas sin
            pagar. Posible sobreendeudamiento. Probabilidad de incumplimiento:
            Alta. <br />
            <br /> “Alerta roja. Es momento de actuar y mejorar tu situación.”
          </p>
        </Riesgo>
        <Riesgo>
          <h3>5 Riesgo Muy Alto (Crítico)</h3>
          <br />
          <p>
            Descripción: Sin historial crediticio confiable o con múltiples
            reportes negativos. Alto nivel de morosidad. Probabilidad de
            incumplimiento: Muy alta.
            <br />
            <br /> “¡Cuidado! Tu acceso al crédito está en riesgo. Laurita puede
            ayudarte a mejorar.”
          </p>
        </Riesgo>
      </div>
    </div>
  );
}

export default Inicio;
