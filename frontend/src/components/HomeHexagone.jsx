import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { disableRightClick, removeDisableRightClick } from "../services/utils";
import style from "./HomeHexagone.module.scss";

function HomeHexagone() {
  useEffect(() => {
    disableRightClick();
    return () => removeDisableRightClick();
  }, []);

  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <section className={style.gallery}>
        <span>
          <div className={style.hexa1}>
            <Link className={style.link} to="/galerie/7">
              <img
                src={`${
                  import.meta.env.VITE_ASSETS_IMAGES_URL
                }/arts/1689169964493-arts-40FI79.jpg`}
                alt="Effet de nuit sur la Cheminée usine du Tampon"
              />
            </Link>
            <Link className={style.link} to="/galerie/8">
              <img
                src={`${
                  import.meta.env.VITE_ASSETS_IMAGES_URL
                }/arts/1689170030157-arts-40FI78.jpg`}
                alt="Arrivée à l'établissement du Tampon"
              />
            </Link>
            <Link className={style.link} to="/galerie/9">
              <img
                src={`${
                  import.meta.env.VITE_ASSETS_IMAGES_URL
                }/arts/1689170093181-arts-40FI80.jpg`}
                alt="Tampon- Une usine"
              />
            </Link>
          </div>
          <div className={style.hexa2}>
            <Link className={style.link} to="/galerie/10">
              <img
                src={`${
                  import.meta.env.VITE_ASSETS_IMAGES_URL
                }/arts/1689170173782-arts-40FI106.jpg`}
                alt="Quartier St Pierre. Etablissement de la Rivière, montagnes de l'Entre Deux"
              />
            </Link>
            <Link className={style.link} to="/galerie/30">
              <img
                src={`${
                  import.meta.env.VITE_ASSETS_IMAGES_URL
                }/arts/1689172654712-arts-40FI53.1.jpg`}
                alt="Caille de Bourbon"
              />
            </Link>
            <Link className={style.link} to="/galerie/27">
              <img
                src={`${
                  import.meta.env.VITE_ASSETS_IMAGES_URL
                }/arts/1689172211625-arts-40FI105bis.jpg`}
                alt="Le volcan de Bourbon vu du Pas de Bellecombre"
              />
            </Link>
          </div>
        </span>
        <Link className={style.button} to="/galerie">
          <strong>EXPLORER LA GALERIE</strong>
        </Link>
      </section>
    </>
  );
}

export default HomeHexagone;
