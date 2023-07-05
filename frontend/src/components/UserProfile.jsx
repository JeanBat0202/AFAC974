/* import React, { useState } from "react"; */
import { Link } from "react-router-dom";
import "./UserProfile.scss";
import FavArtAPI from "./FavArtAPI";

export default function Profile() {
  return (
    <section>
      <div className="profile-container">
        <h2 className="profile-name">Périf Eric</h2>
        <Link className="modification" to="/modification">
          Modifier mes informations
        </Link>
        <hr />
      </div>
      <h2>galerie personelle</h2>
      <div className="fav-art-container">
        <FavArtAPI />
      </div>
    </section>
  );
}
