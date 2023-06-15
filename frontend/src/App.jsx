import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import GalleryDisplay from "./pages/GalleryDisplay";
import ArtDetails from "./pages/ArtDetails";
import "./App.scss";
import User from "./pages/User";
import Connection from "./pages/Connection";
import SignUp from "./components/SignUp";

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/galerie" element={<GalleryDisplay />} />
          <Route path="/galerie/:id" element={<ArtDetails />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/auteur" element={<HomePage />} />
          <Route path="/utilisateur" element={<User />} />
          <Route path="/connexion" element={<Connection />} />
          <Route path="/s'inscrire" element={<SignUp />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
