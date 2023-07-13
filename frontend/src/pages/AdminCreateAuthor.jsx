import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminCreateArt.scss";

export default function AdminCreateAuthor() {
  const navigate = useNavigate();

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
      alert("Ce champ est requis, veuillez renseigner une valeur");
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
      alert("Votre image doit être au format .jpeg, .jpg ou .png.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !biography ||
      !birthDate ||
      ((!firstname || !lastname) && !authorAlias)
    ) {
      alert("Veuillez remplir tous les champs obligatoires.");
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
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: modelData,
      })
        .then(() => {
          navigate(`/admin-create-art/`);
          alert("L'auteur a bien été enregistré.");
        })
        .catch((err) => {
          console.error(err);
          alert("Une erreur est survenue, veuillez réessayer.");
        });
    }
  };

  return (
    <div className="form-container">
      <h2 className="create-art">Enregistrer un nouvel auteur</h2>
      <p className="required-fields">
        * : champs obligatoires. Veuillez également remplir les champs "Prénom +
        nom" ou "Pseudonyme".
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
            <select name="birthDate" onChange={handleChangeBirthDate}>
              <option value="">Année</option>
              {allYears.map((yearSelected) => (
                <option value={yearSelected}>{yearSelected}</option>
              ))}
            </select>
          </label>
          <p>Date de décès</p>
          <label htmlFor="deathDate" className="date-label">
            <select name="deathDate" onChange={handleChangeDeathDate}>
              <option value="">Année</option>
              {allYears.map((yearSelected) => (
                <option value={yearSelected}>{yearSelected}</option>
              ))}
            </select>
          </label>
          <p>Image</p>
          <label htmlFor="image">
            <input type="file" id="image" onChange={handleChangeImage} />
          </label>
          <button type="submit">Enregistrer l'auteur</button>
        </form>
      </section>
    </div>
  );
}
