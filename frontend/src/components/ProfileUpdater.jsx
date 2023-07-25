import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
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
      credentials: "include",
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
        toast.alert("Une erreur s'est produite, veuillez réessayer.", {
          duration: 4000,
        });
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
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          role_id: user.role_id,
        }),
      })
        .then(() => {
          navigate(`/utilisateur/${user.id}`);
          toast.success("Les modifications ont bien été prises en compte.", {
            duration: 4000,
          });
        })
        .catch(() => {
          toast.alert("Une erreur s'est produite, veuillez réessayer.", {
            duration: 4000,
          });
        });
    } else {
      toast.error("Veuillez remplir tous les champs !!!!", { duration: 4000 });
    }
  };

  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
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
            <p>Modifier mon e-mail</p>
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
              <button type="submit">Valider</button>
              <Link className="cancel" to={`/utilisateur/${user.id}`}>
                Annuler
              </Link>
            </span>
          </form>
        </section>
      </div>
    </>
  );
}
