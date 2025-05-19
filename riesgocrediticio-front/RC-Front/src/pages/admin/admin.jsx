import "./admin.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

function admin() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="admin-card">
          <div className="admin-card__title">Usuario</div>
          <div className="admin-card__data">
            <div className="admin-card__right">
              <div className="admin-item">ID</div>
              <div className="admin-item">Nombre</div>
              <div className="admin-item">Apellido</div>
              <div className="admin-item">Tipo Riesgo</div>
            </div>
            <div className="admin-card__left">
              <div className="admin-item">1</div>
              <div className="admin-item">Harold</div>
              <div className="admin-item">Estibenson</div>
              <div className="admin-item">Alto</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <p className="admin-p">
        El usuario presenta 5 deudas en donde sus argumentos son que las dedudas
        lo tienen a el.
        <br /> dice explicitamente "No puedo mas lo siento pero no puedo mas "
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default admin;
