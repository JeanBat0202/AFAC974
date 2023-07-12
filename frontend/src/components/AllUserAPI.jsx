import { Link, useNavigate } from "react-router-dom";
import "./AllUserAPI.scss";
import PropTypes from "prop-types";
import Trash from "../assets/Trash.svg";

function AllUserAPI({ id, userFirstname, lastname }) {
  const navigate = useNavigate();

  const deleteUser = () => {
    if (confirm("Are you sure to delete this user?")) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`, {
        method: "DELETE",
      })
        .then(() => navigate("/alluser"))
        .catch((err) => console.error(err));
    }
  };

  return (
    <section className="tableau">
      <ul className="user">
        <li className="unique-key">{id}</li>
        <li className="unique-key">{userFirstname}</li>
        <li className="unique-key">{lastname}</li>
        <Link className="btn" to={`/admin-edit-user/${id}`}>
          <p className="pen">✎</p>
        </Link>
        <button className="btn" type="button" onClick={deleteUser}>
          <img src={Trash} alt="" />
        </button>
      </ul>
    </section>
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
