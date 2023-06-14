import React, { useState } from "react";
import "./LogIn.scss";
import { Link } from "react-router-dom";

function LogIn() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmit, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      email: "test2@gmail.com",
      password: "pass1",
    },
    {
      email: "test.61@gmail.com",
      password: "pass2",
    },
  ];

  const errors = {
    email: "invalid emil",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.email === email.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  // Generate JSX code for error message
  const handleChangeMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const handleChangeEmail = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email"> Email </label>
          <input className="border" type="email" name="email" required />
          {handleChangeEmail("email")}
        </div>
        <div className="input-container">
          <label htmlFor="password"> Mot de passe </label>
          <input className="border" type="password" name="pass" required />
          {handleChangeMessage("pass")}
        </div>
        <div className="button-container">
          <Link to="/">
            <button type="submit">Se connecter </button>
          </Link>
        </div>
        <p className="text">
          Pas encore inscrit ?
          <Link to="/s'inscrire" className="sign-up">
            Créer un compte
          </Link>
        </p>
      </form>
    </div>
  );
  return (
    <div className="app">
      <div className="login-form">
        <div className="title"> Connexion </div>
        {isSubmit ? <div>Vous êtes bien connecté</div> : renderForm}
      </div>
      <div className="hexagone" />
    </div>
  );
}

export default LogIn;
