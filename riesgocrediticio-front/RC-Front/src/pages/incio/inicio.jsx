import "./inicio.css";
import Navbar from "../../components/navbar/navbar";
import Riesgo from "../../components/tipoRiesgo/riesgo";
import Chatbot from "../../components/chatbot/chatbot";
import Footer from "../../components/footer/footer";

function Inicio() {
  return (
    <div>
      <Navbar />
      <div class="inicio-ContIA">
        <article class="inicio-IATxt">
          <p class="inicio-ParIA">
            ¿Estás listo para descubrir tu nivel crediticio? Te presentamos a
            <b> Laurita</b>, una <b>Inteligencia Artificial</b> diseñada para
            ayudarte a evaluar tu nivel de riesgo financiero. Gracias a su
            capacidad de análisis, <b>Laurita</b> te hará unas preguntas
            sencillas y, con base en tus respuestas, te ofrecerá una evaluación
            precisa. Así podrás tomar decisiones importantes en tu vida con
            mayor seguridad.
            <br /> <b>¡Ella se encarga del análisis por ti!</b>
          </p>
        </article>
        <div class="inicio-PerfilIA">
          <div></div>
        </div>
      </div>
      <h3 class="inicio-TpsRiesgo">Tipos De Riesgo</h3>
      <div className="inicio-CrRsgos">
        <Riesgo>
          <h3 class="inicio-h3V"> Riesgo BAJO</h3>
          <br />
          <p>
            El usuario tiene historial crediticio <b> sólido</b>. Paga
            puntualmente y tiene pocas deudas. Su comportamiento muestra
            <b> Responsabilidad Financiera</b>.<br />
            <br /> Es probable que cumpla con futuras obligaciones. Puede tener
            límites de crédito iniciales <b> bajos</b>. Quizá no aprovecha todas
            las oportunidades crediticias. Debe mantener buenos hábitos de pago.
            Puede usar crédito estratégicamente y revisar su informe
            periódicamente.
          </p>
        </Riesgo>
        <Riesgo>
          <h3 class="inicio-h3N"> Riesgo REGULAR</h3>
          <br />
          <p>
            Tiene algunos <b> pagos tardíos ocasionales.</b> Su
            <b>
              endeudamiento es moderado respecto a ingresos. Probabilidad
              razonable de cumplir obligaciones.
              <br />
              <br /> Representa mayor riesgo que perfil bajo. Enfrentará tasas
              menos favorables y límites bajos. Puede tener solicitudes
              rechazadas. Debe priorizar pagos puntuales y hacer presupuesto.
              Evitar deudas innecesarias y monitorear informe crediticio.
            </b>
          </p>
        </Riesgo>
        <Riesgo>
          <h3 class="inicio-h3R"> Riesgo ALTO </h3>
          <br />
          <p>
            Presenta pagos frecuentes atrasados o <b> incumplimientos</b>. Su
            endeudamiento es muy elevado. Alta probabilidad de dificultades
            futuras. <b> Problemas para cumplir nuevas obligaciones</b>. <br />
            <br />
            Tendrá gran dificultad para obtener créditos. Enfrentará tasas muy
            altas y límites bajos. Necesita asesoramiento financiero profesional
            urgente. Debe priorizar deudas y evitar nuevas. Trabajar en
            reconstruir historial crediticio. Revisar informe regularmente,
            <b> Mejora llevará tiempo</b>.
          </p>
        </Riesgo>
      </div>
      {}
      <Chatbot />

      <Footer />
    </div>
  );
}

export default Inicio;

