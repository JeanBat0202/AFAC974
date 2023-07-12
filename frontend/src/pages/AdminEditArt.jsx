import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./adminCreateArt.scss";

export default function AdminEditArt() {
  const navigate = useNavigate();

  const [authors, setAuthors] = useState();
  const [artTypes, setArtTypes] = useState();
  const [categories, setCategories] = useState();

  const [imageRef, setImageRef] = useState("");
  const [title, setTitle] = useState("");
  const [shortTitle, setShortTitle] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [artTypeId, setArtTypeId] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [about, setAbout] = useState("");
  const [article, setArticle] = useState("");

  const { id } = useParams();

  const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

  const getOneArt = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/arts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.info(data);
        setImagePath(data.image ? data.image : "");
        setImageRef(data.imageRef ? data.imageRef : "");
        setTitle(data.title ? data.title : "");
        setShortTitle(data.shortTitle ? data.shortTitle : "");
        setYear(data.year ? data.year : "");
        setMonth(data.month ? data.month : "");
        setDay(data.day ? data.day : "");
        setArtTypeId(data.artTypeId ? data.artTypeId : "");
        setWidth(data.width ? data.width : "");
        setHeight(data.height ? data.height : "");
        setCategoryId(data.categoryId ? data.categoryId : "");
        setAbout(data.about ? data.about : "");
        setArticle(data.article ? data.article : "");
        setAuthorId(data.author_id ? data.author_id : "");
      })
      .catch((err) => console.error(err));
  };

  const getAllAuthors = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/authors`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setAuthors(data))
      .catch((err) => console.error(err));
  };

  const getAllArtTypes = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/artTypes`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setArtTypes(data))
      .catch((err) => console.error(err));
  };

  const getAllCategories = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/categories`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneArt();
    getAllAuthors();
    getAllArtTypes();
    getAllCategories();
  }, [id]);

  if (!authors || !artTypes || !categories) {
    return <p>En cours de chargement...</p>;
  }

  const allDays = [];
  for (let i = 0; i < 31; i += 1) {
    allDays.push(i + 1);
  }

  const allMonths = [
    { monthNumber: 1, monthName: "janvier" },
    { monthNumber: 2, monthName: "février" },
    { monthNumber: 3, monthName: "mars" },
    { monthNumber: 4, monthName: "avril" },
    { monthNumber: 5, monthName: "mai" },
    { monthNumber: 6, monthName: "juin" },
    { monthNumber: 7, monthName: "juillet" },
    { monthNumber: 8, monthName: "août" },
    { monthNumber: 9, monthName: "septembre" },
    { monthNumber: 10, monthName: "octobre" },
    { monthNumber: 11, monthName: "novembre" },
    { monthNumber: 12, monthName: "décembre" },
  ];

  const allYears = [];
  for (let i = 1799; i < 2023; i += 1) {
    allYears.push(i + 1);
  }

  const handleChangeImageRef = (e) => {
    setImageRef(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeShortTitle = (e) => {
    setShortTitle(e.target.value);
  };

  const handleChangeAuthorId = (e) => {
    const authorIdToUpdate = parseInt(e.target.value, 10);

    if (!Number.isNaN(authorIdToUpdate)) {
      setAuthorId(authorIdToUpdate);
    } else {
      alert("Ce champ est requis, veuillez sélectionner un auteur");
    }
  };

  const handleChangeImage = (e) => {
    const fileSelected = e.target.files[0];

    if (imageTypes.includes(fileSelected.type)) {
      setImageFile(e.target.files[0]);
    } else {
      alert("Votre image doit être au format .jpeg, .jpg ou .png.");
    }
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

    if (!Number.isNaN(categoryIdToUpdate)) {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !imageRef ||
      !title ||
      !width ||
      !height ||
      !authorId ||
      !artTypeId ||
      !categoryId
    ) {
      alert("Veuillez remplir tous les champs obligatoires.");
    } else if (imageFile) {
      const modelData = new FormData();
      modelData.append("imageRef", imageRef);
      modelData.append("title", title);
      modelData.append("image", imageFile);
      modelData.append("year", year || null);
      modelData.append("width", width);
      modelData.append("height", height);
      modelData.append("authorId", authorId);
      modelData.append("artTypeId", artTypeId);
      modelData.append("categoryId", categoryId);
      if (shortTitle) {
        modelData.append("shortTitle", shortTitle);
      } else if (day) {
        modelData.append("day", day);
      } else if (month) {
        modelData.append("month", month);
      } else if (about) {
        modelData.append("about", about);
      } else if (article) {
        modelData.append("article", article);
      }

      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/arts/${id}?withImg=true`, {
        method: "PUT",
        credentials: "include",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: modelData,
      })
        .then(() => {
          navigate(`/galerie/${id}`);
          alert("L'œuvre a bien été modifiée.");
        })
        .catch((err) => {
          console.error(err);
          alert("Une erreur est survenue, veuillez réessayer.");
        });
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/arts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageRef,
          title,
          shortTitle: shortTitle || null,
          authorId,
          day: day || null,
          month: month || null,
          year,
          artTypeId,
          width,
          height,
          categoryId,
          about: about || null,
          article: article || null,
        }),
      })
        .then(() => {
          navigate(`/galerie/${id}`);
        })
        .catch((err) => {
          console.error(err);
          alert("Une erreur est survenue, veuillez réessayer.");
        });
    }
  };

  return (
    <div className="form-container">
      <h2 className="create-art">Modifier une œuvre existante</h2>
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
          <p>
            Auteur <strong>*</strong>
          </p>
          <label htmlFor="authorId">
            <select
              name="authorId"
              value={authorId}
              onChange={handleChangeAuthorId}
            >
              <option value="">Veuillez sélectionner un auteur</option>
              {authors.map((author) => (
                <option value={author.id}>
                  {author.firstname} {author.lastname}
                </option>
              ))}
            </select>
          </label>
          <p>
            Image <strong>*</strong>
          </p>
          <label htmlFor="image" className="img-label">
            <img
              src={imageFile || imagePath}
              alt={imageFile ? `Image modifiée` : imageRef}
            />
            <input type="file" id="image" onChange={handleChangeImage} />
          </label>
          <p>Date de réalisation</p>
          <label htmlFor="creationDate" className="date-label">
            <select name="day" value={day} onChange={handleChangeDay}>
              <option value="">Jour</option>
              {allDays.map((daySelected) => (
                <option value={daySelected}>{daySelected}</option>
              ))}
            </select>
            <select name="month" value={month} onChange={handleChangeMonth}>
              <option value="">Mois</option>
              {allMonths.map((monthSelected) => (
                <option value={monthSelected.monthNumber}>
                  {monthSelected.monthName}
                </option>
              ))}
            </select>
            <select name="year" value={year} onChange={handleChangeYear}>
              <option value="">Année *</option>
              {allYears.map((yearSelected) => (
                <option value={yearSelected}>{yearSelected}</option>
              ))}
            </select>
          </label>
          <p>
            Technique <strong>*</strong>
          </p>
          <label htmlFor="artTypeId">
            <select
              name="artTypeId"
              value={artTypeId}
              onChange={handleChangeArtTypeId}
            >
              <option value="">Veuillez sélectionner une technique</option>
              {artTypes.map((artType) => (
                <option value={artType.id}>{artType.type}</option>
              ))}
            </select>
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
          <p>
            Catégorie <strong>*</strong>
          </p>
          <label htmlFor="categoryId">
            <select
              name="categoryId"
              value={categoryId}
              onChange={handleChangeCategoryId}
            >
              <option value="">Veuillez sélectionner une catégorie</option>
              {categories.map((category) => (
                <option value={category.id}>{category.catName}</option>
              ))}
            </select>
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
          <button type="submit">Enregistrer les modifications</button>
        </form>
      </section>
    </div>
  );
}