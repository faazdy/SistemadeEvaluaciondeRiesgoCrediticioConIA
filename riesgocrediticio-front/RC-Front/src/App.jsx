import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/incio/inicio.jsx";
import Login from "./pages/login/login.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </Router>
  );
}

export default App;
