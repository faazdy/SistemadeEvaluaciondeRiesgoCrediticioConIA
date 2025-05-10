import "./riesgo.css";

function Riesgo({ children }) {
  return (
    <div class="riesgo-contenedor">
      <div class="riesgo-tarjeta">{children}</div>
    </div>
  );
}

export default Riesgo;
