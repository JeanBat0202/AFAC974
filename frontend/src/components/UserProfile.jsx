import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UserProfile.scss";
import FavArtAPI from "./FavArtAPI";

export default function Profile() {
  const [userConnected, setUserConnected] = useState();
  const [favorites, setFavorites] = useState();

  const { id } = useParams();

  const getOneUserConnected = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`)
      .then((resp) => resp.json())
      .then((data) => setUserConnected(data));
  };

  const getFavorites = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/favorites/${id}`)
      .then((resp) => resp.json())
      .then((data) => setFavorites(data));
  };

  useEffect(() => {
    getOneUserConnected();
    getFavorites();
  }, [id]);

  if (!userConnected) {
    return <p>Loading</p>;
  }

  if (!favorites) {
    return <p>Loading</p>;
  }

  return (
    <section>
      <div className="profile-container">
        <h2 className="profile-name">
          {userConnected.firstname} {userConnected.lastname}
        </h2>
        <button type="button">Modifier mes informations</button>
        <hr />
      </div>
      <h2>galerie personnelle</h2>
      <div className="fav-art-container">
        {favorites.map((favorite) => (
          <FavArtAPI {...favorite} />
        ))}
      </div>
    </section>
  );
}
