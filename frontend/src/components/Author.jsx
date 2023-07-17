import "./Author.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import AuthorPic from "../assets/Hypolite_fichiers/Hipolyte.jpeg";

export default function Author() {
  const [author, setAuthor] = useState();

  const { id } = useParams();

  const getOneAuthor = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/authors/${id}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setAuthor(data));
  };

  useEffect(() => {
    getOneAuthor();
  }, [id]);

  if (!author) {
    return <p>Loading</p>;
  }

  return (
    <section className="author-container">
      <span className="author-image">
        <img
          src={`${import.meta.env.VITE_ASSETS_IMAGES_URL}/authors/${
            author.image
          }`}
          alt="Author"
          className="author-pic"
        />
        <div className="hexa1">
          <div className="hexared" />
          <div className="hexared" />
          <div className="hexared" />
        </div>
        <div className="hexagone" />
      </span>
      <div className="description">
        <div className="author-biography">
          <h2 className="author-font-family">
            {author.firstname} {author.lastname}, {author.author_alias}
          </h2>
          <h3>
            {author.birth_date} - {author.death_date}
          </h3>
          <p className="author-bio-p">{author.biography}</p>
        </div>
      </div>
    </section>
  );
}
