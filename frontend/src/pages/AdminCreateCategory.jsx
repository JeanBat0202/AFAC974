import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminCreateArt.scss";

export default function AdminCreateCategory() {
  const navigate = useNavigate();

  const [catName, setCatName] = useState("");

  const handleChangeCatName = (e) => {
    setCatName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!catName) {
      alert("Veuillez remplir tous les champs obligatoires.");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          catName,
        }),
      })
        // .then((res) => res.json())
        .then(() => {
          navigate(`/admin-create-art`);
        })
        .catch((err) => {
          console.error(err);
          alert("Une erreur est survenue, veuillez réessayer.");
        });
    }
  };

  return (
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
          <button type="submit" className="create-small-data">
            Enregistrer la catégorie
          </button>
        </form>
      </section>
    </div>
  );
}
