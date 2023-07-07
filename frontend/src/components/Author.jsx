import "./Author.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthorPic from "../assets/Hypolite_fichiers/Hipolyte.jpeg";

export default function Author() {
  const [author, setAuthor] = useState();

  const { id } = useParams();

  const getOneAuthor = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/authors/${id}`)
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
        <img src={AuthorPic} alt="Author" className="author-pic" />
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
            {author.firstname} {author.lastname}
          </h2>
          <p className="author-bio-p">{author.biography}</p>
        </div>
      </div>
    </section>
  );
}
