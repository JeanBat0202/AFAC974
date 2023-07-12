import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./UserProfile.module.scss";

// eslint-disable-next-line no-unused-vars
export default function FavArtAPI({ artId, shortTitle, image }) {
  return (
    <figure className={style.figure}>
      <figcaption>
        <Link to={`/galerie/${artId}`} className="link">
          <img
            src={`${import.meta.env.VITE_ASSETS_IMAGES_URL}/arts/${image}`}
            alt={shortTitle}
          />
        </Link>
      </figcaption>
    </figure>
  );
}

FavArtAPI.propTypes = {
  shortTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  artId: PropTypes.number.isRequired,
};
