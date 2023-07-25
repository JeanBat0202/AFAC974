import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./LogIn.scss";

function SignUp() {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstname || !lastname || !email || !password) {
      toast.alert(
        "Vous devez fournir un nom, un prénom, un mail et un mot de passe",
        {
          duration: 4000,
        }
      );
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
          role_id: 2,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(`/connexion`);
        })
        .then(
          toast.success(
            "Le compte a été créé avec succès ! Veuillez vous connecter.",
            { duration: 4000 }
          )
        )
        .catch(() => {
          toast.error(
            "Erreur lors de la création du compte. Veuillez réessayer.",
            {
              duration: 4000,
            }
          );
        });
    }
  };

  const renderForm = (
    <form onSubmit={handleSubmit} className="login-form">
      <label htmlFor="firstname">Prénom</label>
      <input
        className="border"
        type="text"
        name="firstname"
        required
        onChange={handleChangeFirstName}
      />
      <label htmlFor="lastname">Nom</label>
      <input
        className="border"
        type="text"
        name="lastname"
        required
        onChange={handleChangeLastName}
      />
      <label htmlFor="email">E-mail</label>
      <input
        className="border"
        type="email"
        name="email"
        required
        onChange={handleChangeEmail}
      />
      <label htmlFor="password">Mot de passe</label>
      <input
        className="border"
        type="password"
        name="pass"
        required
        onChange={handleChangePassword}
      />
      <button type="submit">Enregistrer</button>
    </form>
  );

  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <div className="form-container">
        <h2 className="title">S'inscrire</h2>
        {renderForm}
      </div>
    </>
  );
}

export default SignUp;
