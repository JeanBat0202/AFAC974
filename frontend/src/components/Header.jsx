import "./header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useUserContext } from "../context/UserContext";
import PrivateLink from "./PrivateLink";
import headerHexagon from "../assets/hexagon-svgrepo-com.svg";
import logoAFAC from "../assets/logoAFAC.png";
import accountIcon from "../assets/account-icon.svg";

export default function Header() {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [sidebar, setSideBar] = useState(false);

  const showSidebar = () => {
    if (!sidebar) {
      setBurgerClass("burger-bar clicked");
    } else {
      setBurgerClass("burger-bar unclicked");
    }
    setSideBar(!sidebar);
  };

  const [{ user }, dispatch] = useUserContext();

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/logout`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (response.ok) {
        dispatch({ type: "RESET_USER" });
      } else {
        const errorData = await response.json();
        toast.error(errorData, "error");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while logging out.", "error");
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
          <div id="icon-container">
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
            <div className="burger-container">
              <button
                type="button"
                className="burger-menu"
                onClick={() => {
                  showSidebar();
                }}
                tabIndex="0"
              >
                <div className={burgerClass} />
                <div className={burgerClass} />
                <div className={burgerClass} />
              </button>
            </div>
          </div>
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
