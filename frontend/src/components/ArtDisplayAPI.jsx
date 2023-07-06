import { Link } from "react-router-dom";
import "../pages/Gallery.scss";
import PropTypes from "prop-types";

export default function ArtDisplayAPI({ id, shortTitle, image }) {
  return (
    <div className="parent">
      <div>
        <figure className="visage">
          <div className="image-container">
            <img src={image} alt={shortTitle} />
            <figcaption>
              {shortTitle}
              <Link to={`/galerie/${id}`} className="link">
                + D'INFOS
              </Link>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
}

ArtDisplayAPI.propTypes = {
  shortTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
