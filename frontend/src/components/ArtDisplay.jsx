import { Link } from "react-router-dom";
// import "../pages/Gallery.scss";

export default function ArtDisplay() {
  return (
    <figure>
      <img src="../src/assets/Images/Oeuvres/FRAD974_2FI34.3.jpg" alt="" />
      <figcaption>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        <Link to="/galerie/:id">
          <button type="button"> + D'INFOS</button>
        </Link>
      </figcaption>
    </figure>
  );
}
