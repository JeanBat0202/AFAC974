import style from "./About.module.scss";

export default function Header() {
  return (
    <section className={style.about}>
      <span className={style.text1}>
        <br />
        <h2>Presentation de l'association AFAC974</h2>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          deleniti consectetur possimus esse ea iste sit porro vero dolorum
          exercitationem quod repellat laborum, temporibus nisi. Illo voluptates
          maxime quam dolores.
        </p>
        <br />
      </span>
      <div className={style.hexa1}>
        <div />
        <div />
        <div />
      </div>
      <a
        href="https://museo.vandanjon.com/index.php/en/"
        target="_blank"
        rel="noopener noreferrer"
        className={style.objetTemoin}
      >
        <img src="/src/assets/ObjetTemoin.png" alt="logo Objet Temoin" />
      </a>
      <a
        href="https://ihoi.org/app/photopro.sk/ihoi_icono/"
        target="_blank"
        rel="noopener noreferrer"
        className={style.ihoi}
      >
        <img
          src="/src/assets/logo_iconotheque-de-l-ocean-indien.jpeg"
          alt="logo IHOI"
        />
      </a>
      <div className={style.hexa2}>
        <div />
        <div />
        <div />
      </div>
      <span className={style.text2}>
        <hr />
        <br />
        <h2>
          Mention spéciale - Droits d'auteur des images sur le site internet
        </h2>
        <br />
        <p>
          Cher visiteur, <br />
          <br />
          Nous tenons à attirer votre attention sur le fait que toutes les
          images présentes sur notre site internet sont soumises à des droits
          d'auteur et ne sont pas libres de droit. Ces droits sont protégés par
          la législation en vigueur sur la propriété intellectuelle et sont
          détenus par le Département de La Réunion, Iconothèque historique de
          l'océan Indien et Archives départementales de La Réunion.
          <br />
          <br /> En tant qu'utilisateur de notre site, vous êtes invité à
          consulter, partager et apprécier les images qui vous sont présentées.
          Cependant, il est strictement interdit de copier, reproduire,
          distribuer ou utiliser ces images à des fins commerciales ou non
          commerciales sans l'autorisation expresse des détenteurs des droits
          d'auteur.
        </p>
        <br />
      </span>
      <span className={style.text3}>
        <hr />
        <br />
        <h2>Politique RGPD</h2>
        <br />
        <p>
          Nous collectons et utilisons vos données personnelles uniquement avec
          votre consentement et dans le respect du RGPD. Vos informations sont
          sécurisées et ne sont partagées avec des tiers que si cela est
          nécessaire pour fournir les services demandés ou en cas d'obligation
          légale. Nous conservons vos données pendant la durée nécessaire et
          vous avez le droit d'accéder, de rectifier, de supprimer ou de limiter
          leur traitement.
        </p>
      </span>
      <div className={style.hexagone} />
    </section>
  );
}
