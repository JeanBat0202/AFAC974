import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserContext } from "../context/UserContext";

export default function PrivateLink({ authorizedRoles, to, text }) {
  const [{ user }] = useUserContext();

  if (user && authorizedRoles.find((role) => role === user.role_id)) {
    return (
      <li className="nav-text">
        <NavLink to={to}>{text}</NavLink>
      </li>
    );
  }
}

PrivateLink.propTypes = {
  authorizedRoles: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
