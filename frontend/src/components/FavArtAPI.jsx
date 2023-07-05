import { Link } from "react-router-dom";
import "./UserProfile.scss";
import PropTypes from "prop-types";
import testPic from "../assets/Images/Oeuvres/Jamali.jpg";
import test2Pic from "../assets/Images/Oeuvres/Cheminee_40FI79.jpg";
import test3Pic from "../assets/Images/Oeuvres/FRAD974_98FI18.jpg";
import test4Pic from "../assets/Images/Oeuvres/FRAD974_98FI22.jpg";
import test5Pic from "../assets/Images/Oeuvres/FRM1069_2009.00.42.jpg";
import test6Pic from "../assets/Images/Oeuvres/FRAD974_40FI91.jpg";

export default function FavArtAPI({ id, shortTitle, image }) {
  return (
    <div className="fav-parent">
      <div>
        <figure>
          <div className="fav-image-container">
            <img src={testPic} alt={shortTitle} />
            <img src={test2Pic} alt={shortTitle} />
            <img src={test3Pic} alt={shortTitle} />
            <img src={test4Pic} alt={shortTitle} />
            <img src={test5Pic} alt={shortTitle} />
            <img src={test6Pic} alt={shortTitle} />
            <figcaption>
              {shortTitle}
              <Link to={`/galerie/${id}`} className="fav-link">
                + D'INFOS
              </Link>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
}

FavArtAPI.propTypes = {
  shortTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
