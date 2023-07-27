import { useEffect, useState } from "react";
import ArtDisplayAPI from "../components/ArtDisplayAPI";
import { disableRightClick, removeDisableRightClick } from "../services/utils";

export default function GalleryDisplay() {
  const [artList, setArtList] = useState([]);
  const [currentCat, setCurrentCat] = useState("Tout");
  const [categories, setCategories] = useState();

  const getArts = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/arts/`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setArtList(data))
      .catch((error) => console.error(error));
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
    getArts();
    getAllCategories();
  }, []);

  useEffect(() => {
    disableRightClick();
    return () => removeDisableRightClick();
  }, [artList]);

  const handleCatChange = (e) => {
    setCurrentCat(e.target.value);
  };

  if (!artList || !categories) {
    return <p>En cours de chargement...</p>;
  }

  return (
    <div className="gallery-big-container">
      <div className="CatégorieContainer">
        <div>Trier par catégorie : </div>
        <select
          name="categorie"
          id="ArtCat"
          value={currentCat}
          onChange={handleCatChange}
        >
          <option value="Tout">Tout</option>
          {categories.map((category) => (
            <option value={category.catName} key={category.id}>
              {category.catName}
            </option>
          ))}
        </select>
      </div>
      <div className="container">
        {currentCat === "Tout"
          ? artList.map((art) => (
              <ArtDisplayAPI {...art} key={`art-${art.id}`} />
            ))
          : artList
              .filter((art) => art.catName === currentCat)
              .map((art) => <ArtDisplayAPI {...art} key={`art-${art.id}`} />)}
      </div>
    </div>
  );
}
