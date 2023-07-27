import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import "./LogIn.scss";

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

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
        toast.alert("Erreur lors des modifications. Veuillez réessayer", {
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
          role_id: 2,
        }),
      })
        .then(() => {
          navigate(`/alluser`);
        })
        .catch(() => {
          toast.alert("Erreur lors des modifications. Veuillez réessayer", {
            duration: 4000,
          });
        });
    } else {
      toast.alert("Veullez remplir tous les champs !!!!", { duration: 4000 });
    }
    toast.success("Les modifications ont bien été prises en compte.", {
      duration: 4000,
    });
  };

  const renderForm = (
    <form onSubmit={handleSubmit} className="login-form">
      <label htmlFor="firstname">
        Prénom
        <input
          value={firstname}
          className="border"
          type="text"
          name="firstname"
          onChange={handleChangeFirstName}
          required
        />
      </label>
      <label htmlFor="lastname">
        Nom
        <input
          value={lastname}
          className="border"
          type="text"
          name="lastname"
          onChange={handleChangeLastName}
          required
        />
      </label>
      <label htmlFor="email">
        E-mail
        <input
          value={email}
          className="border"
          type="email"
          name="email"
          onChange={handleChangeEmail}
          required
        />
      </label>
      <button type="submit">Modifier</button>
    </form>
  );
  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <div className="form-container">
        <h2 className="title">Modifier</h2>
        {renderForm}
      </div>
    </>
  );
}
