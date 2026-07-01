import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Aprender } from "./pages/Aprender";
import { Retos } from "./pages/Retos";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Aprender />} />
          <Route path="/challenge" element={<Retos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
