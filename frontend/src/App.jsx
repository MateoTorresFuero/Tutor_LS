import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Learn } from "./pages/Learn";
import { Challenge } from "./pages/Challenge";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/challenge" element={<Challenge />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
