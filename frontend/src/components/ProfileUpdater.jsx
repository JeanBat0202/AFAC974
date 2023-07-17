import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useUserContext } from "../context/UserContext";
import "./ProfileUpdater.scss";

export default function profileUpdater() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [{ user }] = useUserContext();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFirstName(data.firstname);
        setLastName(data.lastname);
        setEmail(data.email);
      })
      .catch(() => {
        toast.alert("Une erreur s'est produite, veuillez réessayer.");
      });
  }, []);

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstname && lastname && email) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
        }),
      })
        .then(() => {
          navigate(`/utilisateur/${user.id}`);
        })
        .catch(() => {
          toast.alert("Une erreur s'est produite, veuillez réessayer.");
        });
    } else {
      toast.error("Veuillez remplir tous les champs !!!!");
    }
  };

  return (
    <div className="profile-form">
      <h2>Modifier vos informations</h2>
      <section className="form-updater">
        <form onSubmit={handleSubmit}>
          <p>Modifier mon prénom</p>
          <label htmlFor="firstName">
            <input
              type="text"
              name="firstName"
              value={firstname}
              onChange={handleChangeFirstName}
              required
            />
          </label>
          <p>Modifier mon nom</p>
          <label htmlFor="lastName">
            <input
              type="text"
              name="lastName"
              value={lastname}
              onChange={handleChangeLastName}
              required
            />
          </label>
          <p>Modifier mon email</p>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
              required
            />
          </label>
          <span>
            <Link className="cancel" to={`/utilisateur/${user.id}`}>
              Annuler
            </Link>
            <button type="submit">Valider</button>
          </span>
        </form>
      </section>
    </div>
  );
}
