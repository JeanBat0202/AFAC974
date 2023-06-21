import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ArtDetails.scss";

export default function ArtDetails() {
  const [art, setArt] = useState();

  const { id } = useParams();

  const getOneArt = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/arts/${id}`)
      .then((resp) => resp.json())
      .then((data) => setArt(data));
  };

  useEffect(() => {
    getOneArt();
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
          <h1 className="ArtTitle"> {art.title} </h1>
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
