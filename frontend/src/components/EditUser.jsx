import { useNavigate, useParams } from "react-router-dom";
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
        alert("Error to modify your account, please try again!!!");
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
          role_id: 2,
        }),
      })
        .then(() => {
          navigate(`/alluser`);
        })
        .catch(() => {
          alert("Error to modify your account, please try again!!!");
        });
    } else {
      alert("Veullez remplir tous les champs !!!!");
    }
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
          <label htmlFor="lastname">Nom </label>
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
          <label htmlFor="email">Email </label>
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
          <button type="submit"> Modifier </button>
        </div>
      </form>
    </div>
  );
  return (
    <div className="app-edit-user">
      <div className="login-form-edit-user">
        <div className="title-edit-user">Modifier</div>
        {renderForm}
      </div>
    </div>
  );
}
