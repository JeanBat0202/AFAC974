import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";
import "../pages/adminCreateArt.scss";

export default function AdminCreateArtType({
  displayArtTypeForm,
  getAllArtTypes,
}) {
  const [type, setType] = useState("");

  const handleChangeArtType = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!type) {
      toast.error("Veuillez remplir tous les champs obligatoires.", {
        duration: 4000,
      });
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/artTypes`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type,
        }),
      })
        // .then((res) => res.json())
        .then(() => {
          getAllArtTypes();
          setType("");
          toast.success("La technique a bien été enregistrée.", {
            duration: 4000,
          });
        })
        .catch((err) => {
          console.error(err);
          toast.error("Une erreur est survenue, veuillez réessayer.", {
            duration: 4000,
          });
        });
    }
  };

  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <div className="form-container">
        <h2 className="create-art">Enregistrer une nouvelle technique</h2>
        <p className="required-fields">* : champs obligatoires</p>
        <section className="form">
          <form onSubmit={handleSubmit}>
            <p>Nom de la technique</p>
            <label htmlFor="artType">
              <input
                type="text"
                id="artType"
                value={type}
                onChange={handleChangeArtType}
              />
            </label>
            <div className="button-container-create-small-data">
              <button
                type="submit"
                onClick={displayArtTypeForm}
                className="create-small-data"
              >
                Enregistrer la technique
              </button>
              <button
                type="button"
                onClick={displayArtTypeForm}
                className="create-small-data cancel-form"
              >
                Annuler
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

AdminCreateArtType.propTypes = {
  displayArtTypeForm: PropTypes.func.isRequired,
  getAllArtTypes: PropTypes.func,
};

AdminCreateArtType.defaultProps = {
  getAllArtTypes: undefined,
};
