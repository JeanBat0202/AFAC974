import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AdminCreateArt from "./AdminCreateArt";
import GalleryDisplay from "./GalleryDisplay";
import AdminCreateAuthor from "../components/AdminCreateAuthor";
import AdminCreateArtType from "../components/AdminCreateArtType";
import AdminCreateCategory from "../components/AdminCreateCategory";
import AllUserAPI from "../components/AllUserAPI";
import EditUser from "../components/EditUser";
import SignUp from "../components/SignUp";
import "./admin.scss";

export default function Admin() {
  const [authorForm, setAuthorForm] = useState("author-hidden");
  const [artTypeForm, setArtTypeForm] = useState("art-type-hidden");
  const [categoryForm, setCategoryForm] = useState("category-hidden");
  const [isClicked, setIsClicked] = useState(false);

  const displayAuthorForm = () => {
    if (!isClicked) {
      setAuthorForm("author-visible");
      setIsClicked(!isClicked);
    } else {
      setAuthorForm("author-hidden");
      setIsClicked(!isClicked);
    }
  };

  const displayArtTypeForm = () => {
    if (!isClicked) {
      setArtTypeForm("art-type-visible");
      setIsClicked(!isClicked);
    } else {
      setArtTypeForm("art-type-hidden");
      setIsClicked(!isClicked);
    }
  };

  const displayCategoryForm = () => {
    if (!isClicked) {
      setCategoryForm("category-visible");
      setIsClicked(!isClicked);
    } else {
      setCategoryForm("category-hidden");
      setIsClicked(!isClicked);
    }
  };

  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <div className="admin-page-container">
        <div className="link-big-container">
          <h2 className="form-h2">Gérer les œuvres</h2>
          <section className="link-container">
            <Link
              to="/admin-create-art"
              element={<AdminCreateArt />}
              className="link-looks-like-button"
            >
              Ajouter une œuvre
            </Link>
            <Link
              to="/galerie"
              element={<GalleryDisplay />}
              className="link-looks-like-button"
            >
              Modifier une œuvre existante
            </Link>
            <Link
              to="/galerie"
              element={<GalleryDisplay />}
              className="link-looks-like-button"
            >
              Supprimer une œuvre
            </Link>
          </section>
        </div>
        <div className="link-big-container">
          <h2 className="form-h2">Ajouter des données</h2>
          <section className="link-container">
            <button
              type="button"
              onClick={displayAuthorForm}
              className="to-add-data"
            >
              Ajouter un auteur
            </button>
            <button
              type="button"
              onClick={displayArtTypeForm}
              className="to-add-data"
            >
              Ajouter une technique
            </button>
            <button
              type="button"
              onClick={displayCategoryForm}
              className="to-add-data"
            >
              Ajouter une catégorie
            </button>
          </section>
        </div>
        <div className="link-big-container">
          <h2 className="form-h2">Gérer les utilisateurs</h2>
          <section className="link-container">
            <Link
              to="/s'inscrire"
              element={<SignUp />}
              className="link-looks-like-button"
            >
              Ajouter un utilisateur
            </Link>
            <Link
              to="/alluser"
              element={<AllUserAPI />}
              className="link-looks-like-button"
            >
              Modifier un utilisateur
            </Link>
            <Link
              to="/alluser"
              element={<EditUser />}
              className="link-looks-like-button"
            >
              Supprimer un utilisateur
            </Link>
          </section>
        </div>
      </div>
      <div className={authorForm}>
        <AdminCreateAuthor displayAuthorForm={displayAuthorForm} />
      </div>
      <div className={artTypeForm}>
        <AdminCreateArtType displayArtTypeForm={displayArtTypeForm} />
      </div>
      <div className={categoryForm}>
        <AdminCreateCategory displayCategoryForm={displayCategoryForm} />
      </div>
    </>
  );
}
