import React, { useState } from "react";
import "./UserProfile.scss";
import FavArtAPI from "./FavArtAPI";

export default function Profile() {
  return (
    <section>
      <div className="profile-container">
        <h2 className="profile-name">Périf Eric</h2>
        <button type="button">Modifier mes informations</button>
        <hr />
      </div>
      <h2>galerie personelle</h2>
      <div className="fav-art-container">
        <FavArtAPI />
      </div>
    </section>
  );
}
