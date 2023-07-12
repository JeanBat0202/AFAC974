import { useEffect, useState } from "react";
import ArtDisplayAPI from "../components/ArtDisplayAPI";
import { disableRightClick, removeDisableRightClick } from "../services/utils";

export default function GalleryDisplay() {
  const [artList, setArtList] = useState([]);
  const [currentCat, setCurrentCat] = useState("Tout");

  const getArts = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/arts/`)
      .then((resp) => resp.json())
      .then((data) => setArtList(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getArts();
  }, []);

  useEffect(() => {
    disableRightClick();
    return () => removeDisableRightClick();
  }, [artList]);

  const handleCatChange = (e) => {
    setCurrentCat(e.target.value);
  };

  return (
    <>
      <div className="CatégorieContainer">
        <div>Trier par catégorie : </div>
        <select
          name="categorie"
          id="ArtCat"
          value={currentCat}
          onChange={handleCatChange}
        >
          <option value="Tout">Tout</option>
          <option value="Usines">Usines</option>
          <option value="Travailleurs">Travailleurs</option>
          <option value="Lieux">Lieux</option>
          <option value="Animaux">Animaux</option>
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
    </>
  );
}
