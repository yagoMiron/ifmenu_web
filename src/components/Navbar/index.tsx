import home from "../../assets/home.svg";
import home_green from "../../assets/home_green.svg";
import home_light from "../../assets/home_light.svg";
import calendar from "../../assets/calendar.svg";
import calendar_green from "../../assets/calendar_green.svg";
import calendar_light from "../../assets/calendar_light.svg";
import prato from "../../assets/prato.svg";
import prato_green from "../../assets/prato_green.svg";
import prato_light from "../../assets/prato_light.svg";
import favorito from "../../assets/favoritos.svg";
import favorito_green from "../../assets/favoritos_green.svg";
import favorito_light from "../../assets/favoritos_light.svg";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import styles from "./styles.module.css";
import Colors from "../../enums/colors";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const { theme } = useContext(UserContext);

  const returnFontColor = (page: string) => {
    return path === page
      ? Colors.FONT_EMPHASIS_1
      : theme === "dark"
      ? Colors.FONT_DARK
      : Colors.FONT_BLACK;
  };

  return (
    <div
      className={styles.bar}
      style={{
        backgroundColor: theme === "dark" ? Colors.BG_DARK : Colors.BG_LIGHT,
      }}
    >
      <Link to={"/home"} className={styles.btn}>
        <img
          className={styles.icon}
          src={
            path === "/home" ? home_green : theme === "dark" ? home : home_light
          }
          alt="casa"
        />
        <span
          style={{
            fontWeight: "bold",
            color: returnFontColor("/home"),
          }}
        >
          Home
        </span>
      </Link>
      <Link to={"/prato_do_dia"} className={styles.btn}>
        <img
          className={styles.icon}
          src={
            path === "/prato_do_dia"
              ? prato_green
              : theme === "dark"
              ? prato
              : prato_light
          }
          alt="prato do dia"
        />
        <span
          style={{
            fontWeight: "bold",
            color: returnFontColor("/prato_do_dia"),
          }}
        >
          Prato
        </span>
      </Link>
      <Link to={"/calendario"} className={styles.btn}>
        <img
          className={styles.icon}
          src={
            path === "/calendario"
              ? calendar_green
              : theme === "dark"
              ? calendar
              : calendar_light
          }
          alt="calendário"
        />
        <span
          style={{
            fontWeight: "bold",
            color: returnFontColor("/calendario"),
          }}
        >
          Calendário
        </span>
      </Link>
      <Link to={"/favoritos"} className={styles.btn}>
        <img
          className={styles.icon}
          src={
            path === "/favoritos"
              ? favorito_green
              : theme === "dark"
              ? favorito
              : favorito_light
          }
          alt="Favoritos"
        />
        <span
          style={{
            fontWeight: "bold",
            color: returnFontColor("/favoritos"),
          }}
        >
          Favoritos
        </span>
      </Link>
    </div>
  );
};
export default Navbar;
