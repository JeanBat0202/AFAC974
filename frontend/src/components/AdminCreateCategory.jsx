import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";
import "../pages/adminCreateArt.scss";

export default function AdminCreateCategory({
  displayCategoryForm,
  getAllCategories,
}) {
  const [catName, setCatName] = useState("");

  const handleChangeCatName = (e) => {
    setCatName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!catName) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/categories`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          catName,
        }),
      })
        // .then((res) => res.json())
        .then(() => {
          getAllCategories();
          setCatName("");
          displayCategoryForm();
          toast.success("La catégorie a bien été enregistrée.");
        })
        .catch((err) => {
          console.error(err);
          toast.error("Une erreur est survenue, veuillez réessayer.");
        });
    }
  };

  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <div className="form-container">
        <h2 className="create-art">Enregistrer une nouvelle catégorie</h2>
        <p className="required-fields">* : champs obligatoires</p>
        <section className="form">
          <form onSubmit={handleSubmit}>
            <p>Nom de la catégorie</p>
            <label htmlFor="catName">
              <input
                type="text"
                id="catName"
                value={catName}
                onChange={handleChangeCatName}
              />
            </label>
            <button
              type="submit"
              // onClick={displayCategoryForm}
              className="create-small-data"
            >
              Enregistrer la catégorie
            </button>
            <button
              type="button"
              onClick={displayCategoryForm}
              className="create-small-data cancel-form"
            >
              Annuler
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

AdminCreateCategory.propTypes = {
  displayCategoryForm: PropTypes.func.isRequired,
  getAllCategories: PropTypes.func.isRequired,
};
