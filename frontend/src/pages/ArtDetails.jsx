import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import "./ArtDetails.scss";

export default function ArtDetails() {
  const [art, setArt] = useState();
  const [{ user }] = useUserContext();
  const { id } = useParams();

  const getOneArt = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/arts/${id}`)
      .then((resp) => resp.json())
      .then((data) => setArt(data));
  };

  useEffect(() => {
    getOneArt();
  }, [id]);

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
          <h1 className="ArtTitle"> {art.title} </h1>
          {user ? (
            <button className="favorite" onClick={addToFavorites} type="button">
              Ajouter à mes favoris
            </button>
          ) : null}
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
