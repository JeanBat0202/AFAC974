import PropTypes from "prop-types";
import style from "./UserProfile.module.scss";

// eslint-disable-next-line no-unused-vars
export default function FavArtAPI({ shortTitle, image }) {
  return (
    <figure className={style.figure}>
      <figcaption>
        <img src={image} alt={shortTitle} />
      </figcaption>
    </figure>
  );
}

FavArtAPI.propTypes = {
  shortTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
