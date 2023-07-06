import "./UserProfile.scss";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
export default function FavArtAPI({ shortTitle, image }) {
  return (
    <div className="fav-parent">
      <div>
        <figure>
          <div className="fav-image-container">
            <img src={image} alt={shortTitle} />
          </div>
        </figure>
      </div>
    </div>
  );
}

FavArtAPI.propTypes = {
  shortTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
