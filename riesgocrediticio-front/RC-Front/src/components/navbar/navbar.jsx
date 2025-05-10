import "./navbar.css";

function navbar() {
  return (
    <div>
      <nav class="navbar-nav">
        <h1>Riesgo Crediticio</h1>
        <ul class="navbar-ul">
          <li>
            <a class="navbar-botonI" href="../../pages/incio/inicio.jsx">
              Inicio
            </a>
          </li>
          <li>
            <a class="navbar-botonI" href="perfil">
              Perfil
            </a>
          </li>
          <li>
            <a class="navbar-botonI" href="IA">
              IA
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
