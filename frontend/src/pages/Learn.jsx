import { useState } from "react";
import { Link } from "react-router-dom";

export function Learn() {
  const [target, setTarget] = useState("A");

  return (
    <div className="page-container">
      <header className="page-header">
        <Link to="/" className="btn-back">← Volver</Link>
        <h2>Modo Aprendizaje</h2>
      </header>
      <div className="content-layout">
        <div className="camera-panel">
          <div className="camera-placeholder">
            <p>Cámara Web (Pronto disponible al conectar MediaPipe)</p>
          </div>
        </div>
        <div className="sidebar-panel">
          <div className="target-display">
            <h3>Letra Objetivo</h3>
            <div className="letter-large">{target}</div>
          </div>
          <div className="letter-picker">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => (
              <button
                key={l}
                onClick={() => setTarget(l)}
                className={`letter-btn ${target === l ? "active" : ""}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
