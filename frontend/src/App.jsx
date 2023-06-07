import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Header from "./components/Header";
import "./App.scss";
import User from "./pages/User";

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerie" element={<Home />} />
          <Route path="/galerie/:id" element={<Home />} />
          <Route path="/a-propos" element={<Home />} />
          <Route path="/auteur" element={<Home />} />
          <Route path="/utilisateur" element={<User />} />
          <Route path="/connexion" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
