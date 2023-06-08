import "./About.scss";

export default function Header() {
  return (
    <>
      <br />
      <h2>Presentation de l'association AFAC974</h2>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam deleniti
        consectetur possimus esse ea iste sit porro vero dolorum exercitationem
        quod repellat laborum, temporibus nisi. Illo voluptates maxime quam
        dolores.
      </p>
      <br />
      <img
        src="/src/assets/ObjetTemoin.png"
        alt="logo Objet Temoin"
        className="logo-objetTemoin"
      />
      <hr />
      <br />
      <h2>
        Mention spéciale - Droits d'auteur des images sur le site internet
      </h2>
      <br />
      <p>
        Cher visiteur, <br />
        <br />
        Nous tenons à attirer votre attention sur le fait que toutes les images
        présentes sur notre site internet sont soumises à des droits d'auteur et
        ne sont pas libres de droit. Ces droits sont protégés par la législation
        en vigueur sur la propriété intellectuelle et sont détenus par leurs
        auteurs respectifs.
        <br />
        <br /> En tant qu'utilisateur de notre site, vous êtes invité à
        consulter, partager et apprécier les images qui vous sont présentées.
        Cependant, il est strictement interdit de copier, reproduire, distribuer
        ou utiliser ces images à des fins commerciales ou non commerciales sans
        l'autorisation expresse des détenteurs des droits d'auteur.
      </p>
      <br />
      <hr />
      <br />
      <h2>Politique RGPD</h2>
      <br />
      <p>
        Nous collectons et utilisons vos données personnelles uniquement avec
        votre consentement et dans le respect du RGPD. Vos informations sont
        sécurisées et ne sont partagées avec des tiers que si cela est
        nécessaire pour fournir les services demandés ou en cas d'obligation
        légale. Nous conservons vos données pendant la durée nécessaire et vous
        avez le droit d'accéder, de rectifier, de supprimer ou de limiter leur
        traitement.
      </p>
    </>
  );
}
