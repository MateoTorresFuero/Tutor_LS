import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="title-gradient">Tutor de Lengua de Señas</h1>
        <p className="subtitle">
          Aprende el abecedario dactilológico en tiempo real utilizando inteligencia artificial y tu cámara web.
        </p>
        <div className="button-group">
          <Link to="/learn" className="btn btn-primary">
            Comenzar a Aprender
          </Link>
          <Link to="/challenge" className="btn btn-secondary">
            Módulo de Retos
          </Link>
        </div>
      </div>
    </div>
  );
}
