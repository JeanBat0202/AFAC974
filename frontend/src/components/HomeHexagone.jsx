import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import { Link } from "react-router-dom";
import { disableRightClick, removeDisableRightClick } from "../services/utils";
import Art1 from "../assets/Images/Oeuvres/Cheminee_40FI79.jpg";
import Art2 from "../assets/Images/Oeuvres/UsineBelAir_40FI78.jpg";
import Art3 from "../assets/Images/Oeuvres/FRAD974_40FI80.jpg";
import Art4 from "../assets/Images/Oeuvres/AD974_40FI106.jpg";
import Art5 from "../assets/Images/Oeuvres/FRAD974_40FI91.jpg";
import Art6 from "../assets/Images/Oeuvres/FRAD974_40FI90.jpg";
import style from "./HomeHexagone.module.scss";

function HomeHexagone() {
  useEffect(() => {
    disableRightClick();
    return () => removeDisableRightClick();
  }, [Art1, Art2, Art3, Art4, Art5, Art6]);

  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <section className={style.gallery}>
        <span>
          <div className={style.hexa1}>
            <Link className={style.link} to="/galerie/1">
              <img src={Art1} alt="" />
            </Link>
            <Link className={style.link} to="/galerie/2">
              <img src={Art2} alt="" />
            </Link>
            <Link className={style.link} to="/galerie/3">
              <img src={Art3} alt="" />
            </Link>
          </div>
          <div className={style.hexa2}>
            <Link className={style.link} to="/galerie/4">
              <img src={Art4} alt="" />
            </Link>
            <Link className={style.link} to="/galerie/5">
              <img src={Art5} alt="" />
            </Link>
            <Link className={style.link} to="/galerie/6">
              <img src={Art6} alt="" />
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
