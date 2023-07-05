import "./AllUserAPI.scss";
import PropTypes from "prop-types";
import Trash from "../assets/Trash.svg";

function AllUserAPI({ id, firstname, lastname }) {
  return (
    <section className="tableau">
      <ul className="user">
        <li className="unique-key">{id}</li>
        <li className="unique-key">{firstname}</li>
        <li className="unique-key">{lastname}</li>
        <button className="btn" type="button">
          <p className="pen">✎</p>
        </button>
        <button className="btn" type="button">
          <img src={Trash} alt="" />
        </button>
      </ul>
    </section>
  );
}

AllUserAPI.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default AllUserAPI;
