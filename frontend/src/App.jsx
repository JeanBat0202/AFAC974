import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import GalleryDisplay from "./pages/GalleryDisplay";
import ArtDetails from "./pages/ArtDetails";
import User from "./pages/User";
import Admin from "./pages/Admin";
import AdminCreateArt from "./pages/AdminCreateArt";
import Author from "./components/Author";
import Connection from "./pages/Connection";
import SignUp from "./components/SignUp";
import ProfileUpdater from "./components/ProfileUpdater";
import AllUser from "./pages/AllUser";
import "./App.scss";
import EditUser from "./components/EditUser";

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
          <Route path="/auteur/:id" element={<Author />} />
          <Route path="/" element={<PrivateRoutes authorizedRoles={[1, 2]} />}>
            <Route path="/utilisateur" element={<User />} />
            <Route path="/modification/:id" element={<ProfileUpdater />} />
            <Route path="/utilisateur/:id" element={<User />} />
          </Route>
          <Route path="/" element={<PrivateRoutes authorizedRoles={[1]} />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin-create-art" element={<AdminCreateArt />} />
            <Route path="/alluser" element={<AllUser />} />
            <Route path="/admin-edit-user/:id" element={<EditUser />} />
          </Route>
          <Route path="/connexion" element={<Connection />} />
          <Route path="/s'inscrire" element={<SignUp />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
