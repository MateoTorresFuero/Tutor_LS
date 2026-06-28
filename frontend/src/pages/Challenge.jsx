import { useState } from "react";
import { Link } from "react-router-dom";

export function Challenge() {
  const [word, setWord] = useState("HOLA");

  return (
    <div className="page-container">
      <header className="page-header">
        <Link to="/" className="btn-back">← Volver</Link>
        <h2>Modo Retos</h2>
      </header>
      <div className="content-layout">
        <div className="camera-panel">
          <div className="camera-placeholder">
            <p>Cámara Web (Pronto disponible al conectar MediaPipe)</p>
          </div>
        </div>
        <div className="sidebar-panel">
          <div className="challenge-display">
            <h3>Palabra a Deletrear</h3>
            <div className="word-large">{word}</div>
            <p>Comienza haciendo la primera seña.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
