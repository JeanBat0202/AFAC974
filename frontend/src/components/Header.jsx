import "./header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [sidebar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sidebar);

  return (
    <>
      <header className="header-big-container">
        <div className="header-background">
          <img
            className="ruby"
            src="./src/assets/hexagon-svgrepo-com.svg"
            alt="header hexagon"
          />
        </div>
        <div className="header-container">
          <Link to="/">
            <img
              className="logo-AFAC"
              src="/src/assets/logoAFAC.png"
              alt="logoAFAC"
            />
          </Link>
          {/* <div className="burger-menu"> */}
          <FaBars
            className="icone-burger"
            onClick={() => {
              showSidebar();
            }}
          />
          {/* </div> */}
        </div>
      </header>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <Link
            to="/"
            onClick={() => {
              showSidebar();
            }}
          >
            <li className="nav-text">Accueil</li>
          </Link>
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
          <li className="nav-text">
            {" "}
            <Link
              to="/connexion"
              onClick={() => {
                showSidebar();
              }}
            >
              Connexion
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
}
