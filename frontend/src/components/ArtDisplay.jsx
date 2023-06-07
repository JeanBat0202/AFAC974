import { Link } from "react-router-dom";
import "../pages/Gallery.scss";

export default function ArtDisplay() {
  return (
    <div className="parent">
      <div className="container">
        <figure>
          <img
            src="https://assets.codepen.io/12005/windmill.jpg"
            alt="A windmill"
          />
          <figcaption>
            Moulin <Link to="/galerie/:id"> + D'INFOS</Link>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/suspension-bridge.jpg"
            alt="The Clifton Suspension Bridge"
          />
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/sunset.jpg"
            alt="Sunset and boats"
          />
          <Link to="/galerie/:id">
            <button type="button"> + D'INFOS</button>
          </Link>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/snowy.jpg"
            alt="a river in the snow"
          />
          <Link to="/galerie/:id">
            <button type="button"> + D'INFOS</button>
          </Link>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/bristol-balloons1.jpg"
            alt="a single checked balloon"
          />
          <Link to="/galerie/:id">
            <button type="button"> + D'INFOS</button>
          </Link>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/dog-balloon.jpg"
            alt="a hot air balloon shaped like a dog"
          />
          <Link to="/galerie/:id">
            <button type="button"> + D'INFOS</button>
          </Link>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/abq-balloons.jpg"
            alt="View from a hot air balloon of other balloons"
          />
          <Link to="/galerie/:id">
            <button type="button"> + D'INFOS</button>
          </Link>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/disney-balloon.jpg"
            alt="a balloon fairground ride"
          />
          <Link to="/galerie/:id">
            <button type="button"> + D'INFOS</button>
          </Link>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/bristol-harbor.jpg"
            alt="sunrise over a harbor"
          />
          <Link to="/galerie/:id">
            <button type="button"> + D'INFOS</button>
          </Link>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/bristol-balloons2.jpg"
            alt="three hot air balloons in a blue sky"
          />
          <Link to="/galerie/:id">
            <button type="button"> + D'INFOS</button>
          </Link>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/toronto.jpg"
            alt="the Toronto light up sign at night"
          />
          <Link to="/galerie/:id">
            <button type="button"> + D'INFOS</button>
          </Link>
        </figure>
      </div>
    </div>
  );
}
