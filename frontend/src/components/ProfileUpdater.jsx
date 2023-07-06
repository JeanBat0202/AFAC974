import { Link } from "react-router-dom";
import "./ProfileUpdater.scss";

export default function profileUpdater() {
  return (
    <div className="profile-form">
      <h2>Modifier vos informations</h2>
      <section className="form-updater">
        <form /* onSubmit={handleSubmit} */>
          <p>Modifier mon prénom</p>
          <label htmlFor="firstName">
            <input type="text" id="firstName" /* value={} onChange={} */ />
          </label>
          <p>Modifier mon nom</p>
          <label htmlFor="lastName">
            <input type="text" id="lastName" /* value={} onChange={} */ />
          </label>
          <p>Modifier mon mot de passe</p>
          <label htmlFor="email">
            <input type="email" id="email" /* value={} onChange={} */ />
          </label>
          <p>Modifier mon prénom</p>
          <label htmlFor="password">
            <input type="password" id="password" /* value={} onChange={} */ />
          </label>
        </form>
        <span>
          <Link className="cancel" to="/utilisateur/:id">
            Annuler
          </Link>
          <button type="button">Valider</button>
        </span>
      </section>
    </div>
  );
}
