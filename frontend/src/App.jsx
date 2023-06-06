import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage.jsx";

import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galerie" element={<Home />} />
        <Route path="/galerie/:id" element={<Home />} />
        <Route path="/a-propos" element={<Home />} />
        <Route path="/auteur" element={<Home />} />
        <Route path="/utilisateur" element={<Home />} />
        <Route path="/connexion" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
