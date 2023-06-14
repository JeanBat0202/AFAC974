import { useEffect, useState } from "react";
import ArtDisplayAPI from "../components/ArtDisplayAPI";

export default function GalleryDisplay() {
  const [artList, setArtList] = useState([]);

  const getArts = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/arts/`)
      .then((resp) => resp.json())
      .then((data) => setArtList(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getArts();
  }, []);

  return (
    <div className="container">
      {artList.map((art) => (
        <ArtDisplayAPI {...art} key={`art-${art.id}`} />
      ))}
    </div>
  );
}