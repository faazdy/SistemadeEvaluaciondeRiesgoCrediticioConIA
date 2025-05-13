import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Intentando iniciar sesión...");

    try {
      const response = await axios.get("http://localhost:8080/auth/login", {
        params: { username, password },
      });

      if (response.status === 200) {
        console.log("Login exitoso:", response.data);
        setError("");
        navigate("/inicio"); // redirige a la vista principal
      } else {
        setError("Credenciales inválidas");
      }
    } catch (error) {
      const mensaje = error.response?.data || "Error de conexión al servidor";
      setError(`Error al iniciar sesión: ${mensaje}`);
    }
  };

  return (
    <div className="login-contenedor">
      <div className="card">
        <div className="card2">
          <form className="form" onSubmit={handleLogin}>
            <p id="heading">Login</p>

            {error && (
              <div style={{ color: "red", marginBottom: "10px", textAlign: "center" }}>
                {error}
              </div>
            )}

            <div className="field">
              <svg className="input-icon" viewBox="0 0 16 16">
                <path d="..." />
              </svg>
              <input
                type="text"
                className="input-field"
                placeholder="Username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <svg className="input-icon" viewBox="0 0 16 16">
                <path d="..." />
              </svg>
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="btn">
              <button className="button1" type="submit">Login</button>
              <button className="button2" type="button">Sign Up</button>
            </div>
            <button className="button3" type="button">Forgot Password</button>
          </form>
        </div>
      </div>
    </div>
  );
}

