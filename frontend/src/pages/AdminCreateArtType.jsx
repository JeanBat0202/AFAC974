import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./adminCreateArt.scss";

export default function AdminCreateArtType() {
  const navigate = useNavigate();

  const [type, setType] = useState("");

  const handleChangeArtType = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!type) {
      toast.alert("Veuillez remplir tous les champs obligatoires.");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/artTypes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type,
        }),
      })
        // .then((res) => res.json())
        .then(() => {
          navigate(`/admin-create-art`);
        })
        .catch((err) => {
          console.error(err);
          toast.alert("Une erreur est survenue, veuillez réessayer.");
        });
    }
  };

  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <div className="form-container">
        <h2 className="create-art">Enregistrer une nouvelle technique</h2>
        <p className="required-fields">* : champs obligatoires</p>
        <section className="form">
          <form onSubmit={handleSubmit}>
            <p>Nom de la technique</p>
            <label htmlFor="artType">
              <input
                type="text"
                id="artType"
                value={type}
                onChange={handleChangeArtType}
              />
            </label>
            <button type="submit" className="create-small-data">
              Enregistrer la technique
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
