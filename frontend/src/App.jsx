import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galerie" element={<Gallery />} />
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
