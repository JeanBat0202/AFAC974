import "./header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useUserContext } from "../context/UserContext";
import PrivateLink from "./PrivateLink";
import headerHexagon from "../assets/hexagon-svgrepo-com.svg";
import logoAFAC from "../assets/logoAFAC.png";
import accountIcon from "../assets/account-icon.svg";

export default function Header() {
  const [sidebar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sidebar);

  const [{ user }, dispatch] = useUserContext();
  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/logout`,
        {
          credentials: "include",
        }
      );

      if (response.ok) {
        dispatch({ type: "RESET_USER" });
      } else {
        const errorData = await response.json();
        alert(errorData, "error");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while logging out.", "error");
    }
  };

  return (
    <>
      <header className="header-big-container">
        <div className="ruby-background" />
        <img className="ruby" src={headerHexagon} alt="header hexagon" />
        <div className="header-container">
          <Link to="/">
            <img className="logo-AFAC" src={logoAFAC} alt="logoAFAC" />
          </Link>
          <div className="account">
            {!user ? (
              <Link to="/connexion">
                <img
                  src={accountIcon}
                  alt="Icône de connexion d'un utilisateur"
                />
              </Link>
            ) : (
              <Link to={`/utilisateur/${user.id}`}>
                <img
                  src={accountIcon}
                  alt="Icône de connexion d'un utilisateur"
                />
              </Link>
            )}
          </div>
          {user ? (
            <Link to={`/utilisateur/${user.id}`}>
              <div className="useraccountconnected">
                {user.firstname} {user.lastname}
              </div>
            </Link>
          ) : null}
          <FaBars
            className="icone-burger"
            onClick={() => {
              showSidebar();
            }}
          />
        </div>
      </header>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="nav-text">
            <Link
              to="/"
              onClick={() => {
                showSidebar();
              }}
            >
              Accueil
            </Link>
          </li>
          <li className="nav-text">
            {" "}
            <Link
              to="/galerie"
              onClick={() => {
                showSidebar();
              }}
            >
              Galerie
            </Link>
          </li>
          <li className="nav-text">
            {" "}
            <Link
              to="/a-propos"
              onClick={() => {
                showSidebar();
              }}
            >
              A propos
            </Link>{" "}
          </li>
          {user ? (
            <>
              <PrivateLink
                to={`/utilisateur/${user.id}`}
                text="Mon compte"
                authorizedRoles={[1, 2]}
                handleClick={showSidebar}
              />
              <PrivateLink
                to="/admin"
                text="Admin"
                authorizedRoles={[1]}
                handleClick={showSidebar}
              />
            </>
          ) : null}
          {!user ? (
            <li className="nav-text">
              <Link
                to="/connexion"
                onClick={() => {
                  showSidebar();
                }}
              >
                Connexion
              </Link>
            </li>
          ) : (
            <li className="nav-text">
              <Link
                to="/"
                onClick={() => {
                  showSidebar();
                  handleLogout();
                }}
              >
                Déconnexion
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
