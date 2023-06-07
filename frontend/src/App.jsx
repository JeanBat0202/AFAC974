import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import "./App.scss";

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/galerie/:id" element={<HomePage />} />
          <Route path="/a-propos" element={<HomePage />} />
          <Route path="/auteur" element={<HomePage />} />
          <Route path="/utilisateur" element={<HomePage />} />
          <Route path="/connexion" element={<HomePage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
