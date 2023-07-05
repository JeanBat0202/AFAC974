import { Tooltip } from "react-tooltip";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import "./ArtDetails.scss";
import star from "../assets/star.png";
import starlike from "../assets/starlike.png";

export default function ArtDetails() {
  const [art, setArt] = useState();
  const [{ user }] = useUserContext();
  const { id } = useParams();
  const [favorites, setFavorites] = useState([]);

  const getOneArt = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/arts/${id}`)
      .then((resp) => resp.json())
      .then((data) => setArt(data));
  };

  const addToFavorites = () => {
    const userId = user.id;
    const artId = id;

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        artId,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.info(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const isFavorite = favorites.find(
    (favorite) => favorite.artId === parseInt(id, 10)
  );
  const getOneFavorite = () => {
    if (user && !isFavorite) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/favorites/${user.id}`)
        .then((resp) => resp.json())
        .then((data) => setFavorites(data));
    }
  };

  useEffect(() => {
    getOneArt();
  }, [id]);

  useEffect(() => {
    getOneFavorite();
  }, [id]);

  if (!art) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className="linkbutton">
        <Link className="returnbutton" to="/galerie">
          <strong> &#60; RETOUR A LA GALERIE </strong>
        </Link>
      </div>
      <div className="parentArtDetails">
        <div className="ArtContainer">
          <img className="Art" src={art.image} alt={art.shortTitle} />
        </div>
        <div className="ArtAbout">
          <Link className="LinkToAuthor" to={`/auteur/${art.author_id}`}>
            <h1 className="ArtAuthor">{`${art.firstname} ${art.lastname}`}</h1>
          </Link>
          <h1 className="ArtTitle">
            {" "}
            {art.title}{" "}
            {user &&
              (!isFavorite ? (
                <button
                  onClick={addToFavorites}
                  type="button"
                  className="starbutton"
                >
                  <img
                    src={star}
                    alt="star"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Ajouter l'oeuvre aux favoris"
                  />
                  <Tooltip id="my-tooltip" />
                </button>
              ) : (
                <button type="button" className="starbutton">
                  <img src={starlike} alt="star" />
                </button>
              ))}{" "}
          </h1>

          <h2 className="ArtDimension">
            ({art.width}x{art.height}cm) - {art.type}
          </h2>
          <br />
          <p className="ArtStory">{art.about}</p>
        </div>
      </div>
    </>
  );
}
