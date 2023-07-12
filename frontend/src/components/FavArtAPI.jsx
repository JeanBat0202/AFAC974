import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./UserProfile.module.scss";

// eslint-disable-next-line no-unused-vars
export default function FavArtAPI({ artId, imageRef, image }) {
  return (
    <figure className={style.figure}>
      <figcaption>
        <Link to={`/galerie/${artId}`} className="link">
          <img src={image} alt={imageRef} />
        </Link>
      </figcaption>
    </figure>
  );
}

FavArtAPI.propTypes = {
  imageRef: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  artId: PropTypes.number.isRequired,
};
