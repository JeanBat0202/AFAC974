import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { disableRightClick, removeDisableRightClick } from "../services/utils";
import style from "./UserProfile.module.scss";
import FavArtAPI from "./FavArtAPI";

export default function Profile() {
  const [userConnected, setUserConnected] = useState();
  const [favorites, setFavorites] = useState();
  const [{ user }] = useUserContext();

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

  useEffect(() => {
    disableRightClick();
    return () => removeDisableRightClick();
  }, [favorites]);

  if (!userConnected) {
    return <p>Loading</p>;
  }

  return (
    <section className={style.section}>
      <span>
        <h2>
          {userConnected.firstname} {userConnected.lastname}
        </h2>

        <Link className={style.modification} to={`/modification/${user.id}`}>
          Modifier mes informations
        </Link>
        <hr />
      </span>
      <h2>galerie personnelle</h2>
      {!favorites ? (
        <p className="NoFavorites">
          Vous n'avez pas ajouté d'oeuvres à vos favoris
        </p>
      ) : (
        <span className={style.span}>
          {favorites.map((favorite) => (
            <FavArtAPI key={favorite.artId} {...favorite} />
          ))}
        </span>
      )}
    </section>
  );
}
