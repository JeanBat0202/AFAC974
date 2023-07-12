import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PrivatePartForGallery from "./PrivatePartForGallery";
import "../pages/Gallery.scss";

export default function ArtDisplayAPI({ id, shortTitle, image }) {
  return (
    <div className="parent">
      <div>
        <figure className="visage">
          <PrivatePartForGallery authorizedRoles={[1]} artId={id} />
          <div className="image-container">
            <img
              src={`${import.meta.env.VITE_ASSETS_IMAGES_URL}/arts/${image}`}
              alt={shortTitle}
            />
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
