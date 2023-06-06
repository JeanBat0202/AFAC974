import { Link } from "react-router-dom";
import Test from "../assets/Test.jpg";
import TestX from "../assets/TestX.png";
import style from "./HomeHexagone.module.scss";

function HomeHexagone() {
  return (
    <section className={style.gallery}>
      <span>
        <div className={style.hexa1}>
          <Link className={style.link} to="/galerie/:id">
            <img src={Test} alt="" />
          </Link>
          <Link className={style.link} to="/galerie/:id">
            <img src={TestX} alt="" />
          </Link>
          <Link className={style.link} to="/galerie/:id">
            <img src={Test} alt="" />
          </Link>
        </div>
        <div className={style.hexa2}>
          <Link className={style.link} to="/galerie/:id">
            <img src={Test} alt="" />
          </Link>
          <Link className={style.link} to="/galerie/:id">
            <img src={TestX} alt="" />
          </Link>
          <Link className={style.link} to="/galerie/:id">
            <img src={Test} alt="" />
          </Link>
        </div>
      </span>
      <Link className={style.button} to="/galerie">
        <strong>EXPLORER LA GALERIE</strong>
      </Link>
    </section>
  );
}

export default HomeHexagone;
