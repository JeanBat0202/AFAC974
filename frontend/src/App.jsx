import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUserContext } from "./context/UserContext";
import PrivateRoutes from "./components/PrivateRoutes";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import GalleryDisplay from "./pages/GalleryDisplay";
import ArtDetails from "./pages/ArtDetails";
import User from "./pages/User";
import Admin from "./pages/Admin";
import AdminCreateArt from "./pages/AdminCreateArt";
import AdminEditArt from "./pages/AdminEditArt";
import Author from "./components/Author";
import Connection from "./pages/Connection";
import SignUp from "./components/SignUp";
import ProfileUpdater from "./components/ProfileUpdater";
import AllUser from "./pages/AllUser";
import "./App.scss";
import EditUser from "./components/EditUser";

function App() {
  const dispatch = useUserContext()[1];

  const checkConnection = async () => {
    try {
      const data = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/refreshToken`,
        {
          credentials: "include",
        }
      ).then((result) => result.json());
      return dispatch({ type: "SET_USER", payload: data });
    } catch (err) {
      return alert(err.response.data, "error");
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

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
            <Route path="/admin-edit-art/:id" element={<AdminEditArt />} />
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
