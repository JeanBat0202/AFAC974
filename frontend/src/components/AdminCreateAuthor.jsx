import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";
import "../pages/adminCreateArt.scss";

export default function AdminCreateAuthor({
  displayAuthorForm,
  getAllAuthors,
}) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [authorAlias, setAuthorAlias] = useState("");
  const [biography, setBiography] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [deathDate, setDeathDate] = useState("");
  const [image, setImage] = useState("");

  const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

  const allYears = [];
  for (let i = 1699; i < 2023; i += 1) {
    allYears.push(i + 1);
  }

  const handleChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleChangeLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleChangeAuthorAlias = (e) => {
    setAuthorAlias(e.target.value);
  };

  const handleChangeBiography = (e) => {
    setBiography(e.target.value);
  };

  const handleChangeBirthDate = (e) => {
    const yearToUpdate = parseInt(e.target.value, 10);

    if (!Number.isNaN(yearToUpdate)) {
      setBirthDate(yearToUpdate);
    } else {
      toast.error("Ce champ est requis, veuillez renseigner une valeur", {
        duration: 4000,
      });
    }
  };

  const handleChangeDeathDate = (e) => {
    const yearToUpdate = parseInt(e.target.value, 10);

    setDeathDate(yearToUpdate);
  };

  const handleChangeImage = (e) => {
    const fileSelected = e.target.files[0];

    if (imageTypes.includes(fileSelected.type)) {
      setImage(e.target.files[0]);
    } else {
      toast.error("Votre image doit être au format .jpeg, .jpg ou .png.", {
        duration: 4000,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !biography ||
      !birthDate ||
      ((!firstname || !lastname) && !authorAlias)
    ) {
      toast.error("Veuillez remplir tous les champs obligatoires.", {
        duration: 4000,
      });
    } else {
      const modelData = new FormData();
      modelData.append("biography", biography);
      modelData.append("birthDate", birthDate);
      if (firstname) {
        modelData.append("firstname", firstname);
      }
      if (lastname) {
        modelData.append("lastname", lastname);
      }
      if (authorAlias) {
        modelData.append("authorAlias", authorAlias);
      }
      if (deathDate) {
        modelData.append("deathDate", deathDate);
      }
      if (image) {
        modelData.append("image", image);
      }

      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/authors`, {
        method: "POST",
        credentials: "include",
        body: modelData,
      })
        .then(() => {
          getAllAuthors();
          setFirstname("");
          setLastname("");
          setAuthorAlias("");
          setBiography("");
          setBirthDate("");
          setDeathDate("");
          setImage("");
          toast.success("L'auteur a bien été enregistré.", { duration: 4000 });
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
        <h2 className="create-art">Enregistrer un nouvel auteur</h2>
        <p className="required-fields">
          * : champs obligatoires. Veuillez également remplir les champs "Prénom
          + nom" ou "Pseudonyme".
        </p>
        <section className="form">
          <form onSubmit={handleSubmit}>
            <p>Prénom</p>
            <label htmlFor="firstname">
              <input
                type="text"
                id="firstname"
                value={firstname}
                onChange={handleChangeFirstname}
              />
            </label>
            <p>Nom</p>
            <label htmlFor="lastname">
              <input
                type="text"
                id="lastname"
                value={lastname}
                onChange={handleChangeLastname}
              />
            </label>
            <p>Pseudonyme</p>
            <label htmlFor="authorAlias">
              <input
                type="text"
                id="authorAlias"
                value={authorAlias}
                onChange={handleChangeAuthorAlias}
              />
            </label>
            <p>
              Biographie <strong>*</strong>
            </p>
            <label htmlFor="biography">
              <textarea
                type="text"
                id="biography"
                value={biography}
                onChange={handleChangeBiography}
              />
            </label>
            <p>
              Date de naissance <strong>*</strong>
            </p>
            <label htmlFor="birthDate" className="date-label">
              <select
                name="birthDate"
                onChange={handleChangeBirthDate}
                value={birthDate}
              >
                <option value="">Année</option>
                {allYears.map((yearSelected) => (
                  <option value={yearSelected} key={yearSelected}>
                    {yearSelected}
                  </option>
                ))}
              </select>
            </label>
            <p>Date de décès</p>
            <label htmlFor="deathDate" className="date-label">
              <select
                name="deathDate"
                onChange={handleChangeDeathDate}
                value={deathDate}
              >
                <option value="">Année</option>
                {allYears.map((yearSelected) => (
                  <option value={yearSelected} key={yearSelected}>
                    {yearSelected}
                  </option>
                ))}
              </select>
            </label>
            <p>Image</p>
            <label htmlFor="image">
              <input type="file" id="image" onChange={handleChangeImage} />
            </label>
            <div className="button-container-create-small-data">
              <button
                type="submit"
                onClick={displayAuthorForm}
                className="create-small-data"
              >
                Enregistrer l'auteur
              </button>
              <button
                type="button"
                onClick={displayAuthorForm}
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

AdminCreateAuthor.propTypes = {
  displayAuthorForm: PropTypes.func.isRequired,
  getAllAuthors: PropTypes.func,
};

AdminCreateAuthor.defaultProps = {
  getAllAuthors: undefined,
};
