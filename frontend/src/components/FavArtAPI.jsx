import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import PropTypes from "prop-types";
import style from "./UserProfile.module.scss";
import envelopeIcon from "../assets/icons/envelope.svg";

// eslint-disable-next-line no-unused-vars
export default function FavArtAPI({ favId, artId, imageRef, image }) {
  return (
    <div className={style.figure}>
      <Link
        to={`/send-post-card/${favId}`}
        className={style.iconGalleryPage}
        data-tooltip-id="post-card-tooltip"
        data-tooltip-content="Envoyer une carte postale"
      >
        <Tooltip id="post-card-tooltip" className={style.postCardTooltip} />
        <img src={envelopeIcon} alt="envelope-icon" />
      </Link>
      <Link to={`/galerie/${artId}`} className="link">
        <img
          src={`${import.meta.env.VITE_ASSETS_IMAGES_URL}/arts/${image}`}
          alt={imageRef}
          className={style.imgWithShadow}
        />
      </Link>
    </div>
  );
}

FavArtAPI.propTypes = {
  imageRef: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  artId: PropTypes.number.isRequired,
  favId: PropTypes.number.isRequired,
};
