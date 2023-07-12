import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import AdminEditArt from "../pages/AdminEditArt";
import trashIcon from "../assets/Trash.svg";

export default function PrivatePartForGallery({ authorizedRoles, artId }) {
  const [{ user }] = useUserContext();

  if (user && authorizedRoles.find((role) => role === user.role_id)) {
    return (
      <div className="icon-gallery-page-container">
        <Link
          to={`/admin-edit-art/${artId}`}
          element={<AdminEditArt />}
          className="icon-gallery-page"
        >
          ✎
        </Link>
        <img src={trashIcon} alt="trash-icon" className="icon-gallery-page" />
      </div>
    );
  }
}

PrivatePartForGallery.propTypes = {
  authorizedRoles: PropTypes.arrayOf(PropTypes.number).isRequired,
  artId: PropTypes.number.isRequired,
};
