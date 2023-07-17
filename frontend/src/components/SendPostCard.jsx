import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import "../pages/adminCreateArt.scss";

export default function SendPostCard() {
  const navigate = useNavigate();

  const [{ user }] = useUserContext();

  const [favorite, setFavorite] = useState("");
  const [receiver, setReceiver] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");

  const { id } = useParams();

  const getOneFavorite = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/favorites/by-fav/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFavorite(data[0]);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneFavorite();
  }, [id]);

  const { firstname } = user.firstname;
  const { lastname } = user.lastname;
  const imageToSend = favorite.image;
  const titleToSend = favorite.title;

  if (!favorite || !user) {
    return <p>En cours de chargement...</p>;
  }

  const handleChangeReceiver = (e) => {
    setReceiver(e.target.value);
  };

  const handleChangeObject = (e) => {
    setObject(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!receiver || !object || !message) {
      toast.alert("Veuillez remplir tous les champs obligatoires.");
    } else {
      fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/emails/send-mail-with-hbs`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            receiver,
            firstname,
            lastname,
            object,
            imageToSend,
            titleToSend,
            message,
          }),
        }
      )
        .then(() => {
          navigate(`/utilisateur/${user.id}`);
          toast.success("Votre carte postale a bien été envoyée !", {
            duration: 4000,
          });
        })
        .catch((err) => {
          console.error(err);
          toast.error("Une erreur est survenue, veuillez réessayer.");
        });
    }
  };

  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <div className="form-container">
        <h2 className="create-art">Envoyer une carte postale</h2>
        <p className="required-fields">* : champs obligatoires</p>
        <section className="form">
          <form onSubmit={handleSubmit}>
            <p>
              Adresse mail du destinataire <strong>*</strong>
            </p>
            <label htmlFor="receiver">
              <input
                type="mail"
                id="receiver"
                value={receiver}
                onChange={handleChangeReceiver}
              />
            </label>
            <p>
              Objet <strong>*</strong>
            </p>
            <label htmlFor="object">
              <input
                type="text"
                id="object"
                value={object}
                onChange={handleChangeObject}
              />
            </label>
            <p>
              Votre message <strong>*</strong>
            </p>
            <label htmlFor="message">
              <textarea
                // type="textarea"
                id="message"
                value={message}
                onChange={handleChangeMessage}
              />
            </label>
            <p>
              Image <strong>*</strong>
            </p>
            <label htmlFor="image" className="img-label">
              <img
                src={`${
                  import.meta.env.VITE_ASSETS_IMAGES_URL
                }/arts/${imageToSend}`}
                alt={titleToSend}
                id="send-post-card"
              />
            </label>
            <button type="submit">Envoyer la carte postale</button>
          </form>
        </section>
      </div>
    </>
  );
}