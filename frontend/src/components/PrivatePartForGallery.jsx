import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import AdminEditArt from "../pages/AdminEditArt";
import trashIcon from "../assets/Trash.svg";

export default function PrivatePartForGallery({ authorizedRoles, artId }) {
  const navigate = useNavigate();
  const [{ user }] = useUserContext();

  const deleteArt = () => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette œuvre ?")) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/arts/${artId}`, {
        method: "DELETE",
      })
        .then(() => navigate("/galerie"))
        .catch((err) => console.error(err));
    }
  };

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
        <button type="button" onClick={deleteArt} className="icon-gallery-page">
          <img src={trashIcon} alt="trash-icon" />
        </button>
      </div>
    );
  }
}

PrivatePartForGallery.propTypes = {
  authorizedRoles: PropTypes.arrayOf(PropTypes.number).isRequired,
  artId: PropTypes.number.isRequired,
};
