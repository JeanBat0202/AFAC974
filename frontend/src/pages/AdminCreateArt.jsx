import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminCreateArt.scss";

export default function Admin() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [imageRef, setImageRef] = useState("");
  const [title, setTitle] = useState("");
  const [shortTitle, setShortTitle] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [artTypeId, setArtTypeId] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [about, setAbout] = useState("");
  const [article, setArticle] = useState("");
  const [authorId, setAuthorId] = useState("");

  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };

  const handleChangeImageRef = (e) => {
    setImageRef(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeShortTitle = (e) => {
    setShortTitle(e.target.value);
  };

  const handleChangeDay = (e) => {
    const dayToUpdate = parseInt(e.target.value, 10);

    setDay(dayToUpdate);
  };

  const handleChangeMonth = (e) => {
    const monthToUpdate = parseInt(e.target.value, 10);

    setMonth(monthToUpdate);
  };

  const handleChangeYear = (e) => {
    const yearToUpdate = parseInt(e.target.value, 10);

    if (!Number.isNaN(yearToUpdate)) {
      setYear(yearToUpdate);
    } else {
      alert("Ce champ est requis, veuillez renseigner une valeur");
    }
  };

  const handleChangeArtTypeId = (e) => {
    const artTypeIdToUpdate = parseInt(e.target.value, 10);

    if (
      !Number.isNaN(artTypeIdToUpdate)
      /* && voir pour le bloquer entre 0 et artType.length */
    ) {
      setArtTypeId(artTypeIdToUpdate);
    } else {
      alert("Ce champ est requis, veuillez sélectionner un type d'œuvre");
    }
  };

  const handleChangeWidth = (e) => {
    const widthToUpdate = parseFloat(e.target.value);

    if (!Number.isNaN(widthToUpdate)) {
      setWidth(widthToUpdate);
      console.warn(typeof widthToUpdate, widthToUpdate);
    } else {
      alert("Ce champ est requis, veuillez renseigner une valeur");
    }
  };

  const handleChangeHeight = (e) => {
    const heightToUpdate = parseFloat(e.target.value);

    if (!Number.isNaN(heightToUpdate, 10)) {
      setHeight(heightToUpdate);
    } else {
      alert("Ce champ est requis, veuillez renseigner une valeur");
    }
  };

  const handleChangeCategoryId = (e) => {
    const categoryIdToUpdate = parseInt(e.target.value, 10);

    if (
      !Number.isNaN(categoryIdToUpdate)
      /* && voir pour le bloquer entre 0 et category.length */
    ) {
      setCategoryId(categoryIdToUpdate);
    } else {
      alert("Ce champ est requis, veuillez sélectionner une catégorie");
    }
  };

  const handleChangeAbout = (e) => {
    setAbout(e.target.value);
  };

  const handleChangeArticle = (e) => {
    setArticle(e.target.value);
  };

  const handleChangeAuthorId = (e) => {
    const authorIdToUpdate = parseInt(e.target.value, 10);

    if (
      !Number.isNaN(authorIdToUpdate)
      /* && voir pour le bloquer entre 0 et author.length */
    ) {
      setAuthorId(authorIdToUpdate);
    } else {
      alert("Ce champ est requis, veuillez sélectionner un auteur");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !title ||
      !image ||
      !width ||
      !height ||
      !imageRef ||
      !categoryId ||
      !artTypeId ||
      !authorId
    ) {
      alert("Veuillez remplir tous les champs obligatoires.");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/arts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageRef,
          title,
          shortTitle,
          image,
          day,
          month,
          year: year || null,
          width,
          height,
          about,
          article,
          categoryId,
          artTypeId,
          authorId,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          navigate(`/galerie/${data.id}`);
        })
        .catch((err) => {
          console.error(err);
          alert("Une erreur est survenue, veuillez réessayer.");
        });
    }
  };

  return (
    <div className="form-container">
      <h2>Enregistrer une nouvelle œuvre</h2>
      <p className="required-fields">* : champs obligatoires</p>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <p>
            Référence image ADR <strong>*</strong>
          </p>
          <label htmlFor="imageRef">
            <input
              type="text"
              id="imageRef"
              // required
              value={imageRef}
              onChange={handleChangeImageRef}
            />
          </label>
          <p>
            Titre complet de l'œuvre <strong>*</strong>
          </p>
          <label htmlFor="title">
            <input
              type="text"
              id="title"
              placeholder="Sans titre"
              value={title}
              onChange={handleChangeTitle}
            />
          </label>
          <p>Titre résumé de l'œuvre</p>
          <label htmlFor="shortTitle">
            <input
              type="text"
              id="shortTitle"
              value={shortTitle}
              onChange={handleChangeShortTitle}
            />
          </label>
          <p>Auteur</p>
          <label htmlFor="authorId">
            <input
              type="text"
              id="authorId"
              value={authorId}
              onChange={handleChangeAuthorId}
            />
          </label>
          <p>
            Image <strong>*</strong>
          </p>
          <label htmlFor="image">
            <input
              type="text"
              id="image"
              value={image}
              onChange={handleChangeImage}
            />
          </label>
          <p>Date de réalisation</p>
          <label htmlFor="creationDate" className="date-label">
            <input
              type="number"
              min="1"
              max="31"
              step="1"
              id="day"
              placeholder="jour"
              value={day}
              onChange={handleChangeDay}
            />
            <input
              type="number"
              min="1"
              max="12"
              step="1"
              id="month"
              placeholder="mois"
              value={month}
              onChange={handleChangeMonth}
            />
            <input
              type="number"
              min="1200"
              max="2023"
              step="1"
              id="year"
              placeholder="année *"
              value={year}
              onChange={handleChangeYear}
            />
          </label>
          <p>Technique</p>
          <label htmlFor="artTypeId">
            <input
              type="text"
              id="artTypeId"
              value={artTypeId}
              onChange={handleChangeArtTypeId}
            />
          </label>
          <p>
            Dimensions <strong>*</strong>
          </p>
          <label htmlFor="dimensions" className="dimensions-label">
            <input
              type="number"
              min="0"
              max="10000"
              step="0.01"
              id="width"
              placeholder="largeur"
              value={width}
              onChange={handleChangeWidth}
            />
            <input
              type="number"
              min="0"
              max="10000"
              step="0.01"
              id="height"
              placeholder="hauteur"
              value={height}
              onChange={handleChangeHeight}
            />
          </label>
          <p>Catégorie</p>
          <label htmlFor="categoryId">
            <input
              type="text"
              id="categoryId"
              value={categoryId}
              onChange={handleChangeCategoryId}
            />
          </label>
          <p>Commentaire</p>
          <label htmlFor="about">
            <textarea
              type="text"
              id="about"
              value={about}
              onChange={handleChangeAbout}
            />
          </label>
          <p>Article lié</p>
          <label htmlFor="article">
            <input
              type="text"
              id="article"
              value={article}
              onChange={handleChangeArticle}
            />
          </label>
          <button type="submit">Enregistrer l'œuvre</button>
        </form>
      </section>
    </div>
  );
}