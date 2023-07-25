import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import "./EditUser.scss";

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
    <div className="form-edit-user">
      <form onSubmit={handleSubmit}>
        <div className="input-container-edit-user">
          <label htmlFor="firstname">Prénom</label>
          <input
            value={firstname}
            className="border3"
            type="text"
            name="firstname"
            onChange={handleChangeFirstName}
            required
          />
        </div>
        <div className="input-container-edit-user">
          <label htmlFor="lastname">Nom</label>
          <input
            value={lastname}
            className="border3"
            type="text"
            name="lastname"
            onChange={handleChangeLastName}
            required
          />
        </div>
        <div className="input-container-edit-user">
          <label htmlFor="email">E-mail</label>
          <input
            value={email}
            className="border3"
            type="email"
            name="email"
            onChange={handleChangeEmail}
            required
          />
        </div>
        <div className="button-container-edit-user">
          <button type="submit">Modifier</button>
        </div>
      </form>
    </div>
  );
  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <div className="app-edit-user">
        <div className="login-form-edit-user">
          <div className="title-edit-user">Modifier</div>
          {renderForm}
        </div>
      </div>
    </>
  );
}
