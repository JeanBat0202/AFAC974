import { Link } from "react-router-dom";
import "../pages/Gallery.scss";

export default function ArtDisplay() {
  return (
    <div className="parent">
      <div className="container">
        <figure className="image-container">
          {/* <div className="image-container"> */}
          <img
            src="https://assets.codepen.io/12005/windmill.jpg"
            alt="A windmill"
          />
          <figcaption>
            Moulin
            <Link to="/galerie/:id" className="link">
              + D'INFOS
            </Link>
          </figcaption>
          {/* </div> */}
        </figure>
        <figure>
          <div className="image-container">
            <img
              src="https://assets.codepen.io/12005/suspension-bridge.jpg"
              alt="The Clifton Suspension Bridge"
            />
            <figcaption>
              Pont-suspendu
              <Link to="/galerie/:id" className="link">
                + D'INFOS
              </Link>
            </figcaption>
          </div>
        </figure>
        <figure>
          <div className="image-container">
            <img
              src="https://assets.codepen.io/12005/sunset.jpg"
              alt="Sunset and boats"
            />
            <figcaption>
              Coucher de soleil
              <Link to="/galerie/:id" className="link">
                + D'INFOS
              </Link>
            </figcaption>
          </div>
        </figure>
        <figure>
          <div className="image-container">
            <img
              src="https://assets.codepen.io/12005/snowy.jpg"
              alt="a river in the snow"
            />
            <figcaption>
              Paysage enneiger
              <Link to="/galerie/:id" className="link">
                + D'INFOS
              </Link>
            </figcaption>
          </div>
        </figure>
        <figure>
          <div className="image-container">
            <img
              src="https://assets.codepen.io/12005/bristol-balloons1.jpg"
              alt="a single checked balloon"
            />
            <figcaption>
              Mongolfière
              <Link to="/galerie/:id" className="link">
                + D'INFOS
              </Link>
            </figcaption>
          </div>
        </figure>
        <figure>
          <div className="image-container">
            <img
              src="https://assets.codepen.io/12005/dog-balloon.jpg"
              alt="a hot air balloon shaped like a dog"
            />
            <figcaption>
              Mongolfière chien
              <Link to="/galerie/:id" className="link">
                + D'INFOS
              </Link>
            </figcaption>
          </div>
        </figure>
        <figure>
          <div className="image-container">
            <img
              src="https://assets.codepen.io/12005/abq-balloons.jpg"
              alt="View from a hot air balloon of other balloons"
            />
            <figcaption>
              Envoler de Mongolfières
              <Link to="/galerie/:id" className="link">
                + D'INFOS
              </Link>
            </figcaption>
          </div>
        </figure>
        <figure>
          <div className="image-container">
            <img
              src="https://assets.codepen.io/12005/disney-balloon.jpg"
              alt="a balloon fairground ride"
            />
            <figcaption>
              Mongolfière de Disney
              <Link to="/galerie/:id" className="link">
                + D'INFOS
              </Link>
            </figcaption>
          </div>
        </figure>
        <figure>
          <div className="image-container">
            <img
              src="https://assets.codepen.io/12005/bristol-harbor.jpg"
              alt="sunrise over a harbor"
            />
            <figcaption>
              Port de Bristol
              <Link to="/galerie/:id" className="link">
                + D'INFOS
              </Link>
            </figcaption>
          </div>
        </figure>
        <figure>
          <div className="image-container">
            <img
              src="https://assets.codepen.io/12005/bristol-balloons2.jpg"
              alt="three hot air balloons in a blue sky"
            />
            <figcaption>
              Mongolfière de Bristol
              <Link to="/galerie/:id" className="link">
                + D'INFOS
              </Link>
            </figcaption>
          </div>
        </figure>
        <figure>
          <div className="image-container">
            <img
              src="https://assets.codepen.io/12005/toronto.jpg"
              alt="the Toronto light up sign at night"
            />
            <figcaption>
              Lumière néon de Toronto la nuit
              <Link to="/galerie/:id" className="link">
                + D'INFOS
              </Link>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
}
