import React, { useState } from "react";
import "./UserProfile.scss";
import profilPic from "../assets/account-icon.svg";
import testPic from "../assets/ARKniversary.avif";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [isEditingFirstName, setIsEditingFirstName] = useState(false);
  const [lastName, setLastName] = useState("");
  const [isEditingLastName, setIsEditingLastName] = useState(false);
  const [password, setPassword] = useState("");
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [mail, setMail] = useState("");
  const [isEditingMail, setIsEditingMail] = useState(false);

  const handleEditFirstName = () => {
    setIsEditingFirstName(true);
  };

  const handleSaveFirstName = () => {
    setIsEditingFirstName(false);
    setFirstName(firstName);
  };

  const handleEditLastName = () => {
    setIsEditingLastName(true);
  };

  const handleSaveLastName = () => {
    setIsEditingLastName(false);
    setLastName(lastName);
  };

  const handleEditPassword = () => {
    setIsEditingPassword(true);
  };

  const handleSavePassword = () => {
    setIsEditingPassword(false);
    setPassword(password);
  };

  const handleEditMail = () => {
    setIsEditingMail(true);
  };

  const handleSaveMail = () => {
    setIsEditingMail(false);
    setMail(mail);
  };

  return (
    <section>
      <div className="profile-container">
        <img src={profilPic} alt="profile pic" className="profile-pic" />
        <h2 className="profile-name">
          {firstName} {lastName}
        </h2>
        <hr />

        <h4>ŒUVRES FAVORITES</h4>
        <div className="favorites">
          <img src={testPic} alt="test1" />
          <img src={testPic} alt="test2" />
          <img src={testPic} alt="test3" />
          <img src={testPic} alt="test4" />
          <img src={testPic} alt="test5" />
          <img src={testPic} alt="test6" />
          <img src={testPic} alt="test7" />
          <img src={testPic} alt="test8" />
          <img src={testPic} alt="test9" />
        </div>
        <hr />
        <div className="profile-settings">
          <h4>Gérer mon compte</h4>
          {!isEditingFirstName && (
            <button type="button" onClick={handleEditFirstName}>
              Modifier mon prénom
            </button>
          )}
          {isEditingFirstName && (
            <div>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <button type="button" onClick={handleSaveFirstName}>
                Enregistrer
              </button>
            </div>
          )}

          {!isEditingLastName && (
            <button type="button" onClick={handleEditLastName}>
              Modifier mon nom
            </button>
          )}
          {isEditingLastName && (
            <div>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <button type="button" onClick={handleSaveLastName}>
                Enregistrer
              </button>
            </div>
          )}

          {!isEditingPassword && (
            <button type="button" onClick={handleEditPassword}>
              Modifier mon mot de passe
            </button>
          )}
          {isEditingPassword && (
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" onClick={handleSavePassword}>
                Enregistrer
              </button>
            </div>
          )}

          {!isEditingMail && (
            <button type="button" onClick={handleEditMail}>
              Modifier mon adresse mail
            </button>
          )}
          {isEditingMail && (
            <div>
              <input
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <button type="button" onClick={handleSaveMail}>
                Enregistrer
              </button>
            </div>
          )}

          <button className="Logout" type="button">
            Log Out
          </button>
        </div>
      </div>
    </section>
  );
}
