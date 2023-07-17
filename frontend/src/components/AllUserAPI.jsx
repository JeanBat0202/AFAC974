import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import toast, { Toaster } from "react-hot-toast";
import "./AllUserAPI.scss";
import PropTypes from "prop-types";
import Trash from "../assets/Trash.svg";

function AllUserAPI({ id, userFirstname, lastname }) {
  const navigate = useNavigate();

  const deleteUser = () => {
    if (confirm("Etes-vous sûr de vouloir supprimer l'utilisateur ?")) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          navigate("/admin");
          toast.success("L'utilisateur a bien été supprimé", {
            duration: 4000,
          });
        })
        .catch((err) => {
          console.error(err);
          toast.error("Une erreur est survenue.", { duration: 4000 });
        });
    }
  };

  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <section className="tableau">
        <ul className="user">
          <li className="id">{id}</li>
          <li className="firstname">{userFirstname}</li>
          <li className="lastname">{lastname}</li>
          <Link className="btn" to={`/admin-edit-user/${id}`}>
            <p
              className="pen"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Modifier l'utilisateur"
            >
              ✎
            </p>
          </Link>
          <button className="btn" type="button" onClick={deleteUser}>
            <img
              src={Trash}
              alt="trash"
              className="trash"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Supprimer l'utilisateur"
            />
          </button>
        </ul>
      </section>
      <Tooltip id="my-tooltip" />
    </>
  );
}

AllUserAPI.propTypes = {
  userFirstname: PropTypes.string,
  lastname: PropTypes.string,
  id: PropTypes.number.isRequired,
};

AllUserAPI.defaultProps = {
  userFirstname: undefined,
  lastname: undefined,
};

export default AllUserAPI;
