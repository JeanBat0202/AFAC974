import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import "./LogIn.scss";

function LogIn() {
  const dispatch = useUserContext()[1];
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isSubmit] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Vous devez fournir un email et un mot de passe !!");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then(toast.success("Bienvenue !", { duration: 4000 }))
        .then((data) => {
          dispatch({ type: "SET_USER", payload: data });
          navigate(`/`);
        })
        .catch(() => {
          toast.error(
            "Identifiant et/ou mot de passe incorrect. Veuillez réessayer"
          );
        });
    }
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email"> Email </label>
          <input
            className="border"
            type="email"
            name="email"
            required
            onChange={handleChangeEmail}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password"> Mot de passe </label>
          <input
            className="border"
            type="password"
            name="pass"
            required
            onChange={handleChangePassword}
          />
        </div>
        <div className="button-container">
          <button type="submit">Se connecter </button>
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
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <div className="app">
        <div className="login-form">
          <div className="title"> Connexion </div>
          {renderForm}
        </div>
        <div className="hexagone" />
      </div>
    </>
  );
}

export default LogIn;
