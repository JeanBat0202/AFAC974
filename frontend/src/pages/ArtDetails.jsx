import { Tooltip } from "react-tooltip";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { disableRightClick, removeDisableRightClick } from "../services/utils";
import "./ArtDetails.scss";

export default function ArtDetails() {
  const [isOnFavorite, setIsOnFavorite] = useState();
  const [art, setArt] = useState();
  const [{ user }] = useUserContext();
  const { id } = useParams();
  const [favorites, setFavorites] = useState([]);

  const getOneArt = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/arts/${id}`)
      .then((resp) => resp.json())
      .then((data) => setArt(data));
  };

  const isFavorite = favorites.find(
    (favorite) => favorite.artId === parseInt(id, 10)
  );

  const getOneFavorite = () => {
    if (user) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/favorites/${user.id}`)
        .then((resp) => resp.json())
        .then((data) => setFavorites(data));
    }
  };

  useEffect(() => {
    disableRightClick();
    return () => removeDisableRightClick();
  }, [art]);

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
      .then(() => {
        toast.success("L'oeuvres a été ajouté aux favoris !", {
          duration: 4000,
        });
        setIsOnFavorite(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const removeToFavorite = () => {
    const userId = user.id;
    const artId = id;

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/favorites/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        artId,
      }),
    })
      .then(() => {
        toast.success("L'oeuvres a été retiré des favoris !", {
          duration: 4000,
        });
        setIsOnFavorite(false);
      })
      .catch((error) => {
        console.error(error);
      });
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
  const handleClickFavorite = () => {
    setIsOnFavorite(!isOnFavorite);
  };

  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <div className="linkbutton">
        <Link className="returnbutton" to="/galerie">
          <strong className="back-to-gallery">
            {" "}
            &#60; RETOUR A LA GALERIE{" "}
          </strong>
        </Link>
      </div>
      <div className="parentArtDetails">
        <div className="ArtContainer">
          <img
            className="Art"
            // src={art.image}
            src={`${import.meta.env.VITE_ASSETS_IMAGES_URL}/arts/${art.image}`}
            alt={art.shortTitle}
          />
        </div>
        <div className="ArtAbout">
          <Link className="LinkToAuthor" to={`/auteur/${art.author_id}`}>
            <h1 className="ArtAuthor">{`${art.firstname} ${art.lastname}`}</h1>
          </Link>
          <h1 className="ArtTitle">
            {art.title}
            {user &&
              (!isFavorite ? (
                <button
                  onClick={addToFavorites}
                  type="button"
                  className="starbutton"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      addToFavorites();
                    }
                  }}
                  aria-label="Add to favorites"
                >
                  <div
                    id="favorite"
                    onClick={handleClickFavorite}
                    onKeyUp={(e) => {
                      if (e.key === "Enter") {
                        handleClickFavorite();
                      }
                    }}
                    className={isOnFavorite ? "isFavorite" : "notFavorite"}
                    role="button"
                    tabIndex={0}
                    aria-label={
                      isOnFavorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Ajouter l'oeuvre aux favoris"
                  />
                  <Tooltip id="my-tooltip" />
                </button>
              ) : (
                <button
                  type="button"
                  className="starbutton"
                  onClick={removeToFavorite}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      removeToFavorite();
                    }
                  }}
                  aria-label="Remove from favorites"
                >
                  <div
                    id="favorite"
                    onClick={handleClickFavorite}
                    onKeyUp={(e) => {
                      if (e.key === "Enter") {
                        handleClickFavorite();
                      }
                    }}
                    className={isOnFavorite ? "notFavorite" : "isFavorite"}
                    role="button"
                    tabIndex={0}
                    aria-label={
                      isOnFavorite
                        ? "Add to favorites"
                        : "Remove from favorites"
                    }
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Retirer l'oeuvre des favoris"
                  />
                  <Tooltip id="my-tooltip" />
                </button>
              ))}{" "}
          </h1>
          <h2 className="ArtDimension">
            ({art.width}x{art.height}cm) - {art.type}
          </h2>
          <p className="ArtStory">{art.about}</p>
        </div>
      </div>
    </>
  );
}
