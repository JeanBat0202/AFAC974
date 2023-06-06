import style from "./HomePage.module.scss";
import HomeHexagone from "../components/HomeHexagone";

function HomePage() {
  return (
    <main className={style.main}>
      <HomeHexagone />
      <hr />
      <section className={style.synopsis}>
        <h1>
          Galerie d'Art Engagée : Les Anciens Esclaves de l'Île de La Réunion
        </h1>
        <p>
          Explorez notre galerie d'art éducative dédiée à l'héritage de
          Hippolyte Charles Napoléon Mortier et à la représentation artistique
          des anciens esclaves et des esclaves affranchis. Immergez-vous dans
          une collection d'œuvres d'une profondeur émotionnelle, capturant les
          histoires et les luttes de ces individus jadis opprimés. Chaque pièce
          exposée, soigneusement accompagnée de descriptions évocatrices, offre
          une plongée immersive dans le contexte historique. Enrichissez votre
          compréhension grâce à notre sélection de ressources pédagogiques
          fournies. Notre mission est de stimuler une compréhension profonde,
          une réflexion éclairée et des conversations constructives autour de
          l'esclavage et de l'affranchissement. Rejoignez notre galerie
          virtuelle et partagez l'expérience d'un art qui donne une voix à ceux
          qui ont été marginalisés. Bienvenue dans un lieu où l'art, l'histoire
          et l'éducation s'unissent pour façonner un avenir inclusif et
          respectueux.
        </p>
      </section>
    </main>
  );
}

export default HomePage;
