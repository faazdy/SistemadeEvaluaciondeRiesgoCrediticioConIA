import "./navbar.css";

function navbar() {
  return (
    <div>
      <nav>
        <h1>Riesgo Crediticio</h1>
        <ul>
          <li>
            <a class="botonI" href="../../pages/incio/inicio.jsx">
              Inicio
            </a>
          </li>
          <li>
            <a class="botonI" href="perfil">
              Perfil
            </a>
          </li>
          <li>
            <a class="botonI" href="IA">
              IA
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
