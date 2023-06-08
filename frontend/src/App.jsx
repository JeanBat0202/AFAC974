import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import "./App.scss";

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerie" element={<Home />} />
          <Route path="/galerie/:id" element={<Home />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/auteur" element={<Home />} />
          <Route path="/utilisateur" element={<Home />} />
          <Route path="/connexion" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
