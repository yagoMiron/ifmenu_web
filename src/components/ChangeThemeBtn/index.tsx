import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import styles from "./styles.module.css";
import dark_mode from "../../assets/dark_mode.svg";
import light_mode from "../../assets/light_mode.svg";

type Props = {
  extraStyles?: any;
};

const ChangeThemeBtn = ({ extraStyles }: Props) => {
  const { setTheme, theme } = useContext(UserContext);
  const toChangeTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <button
      className={styles.themeButton}
      style={{
        ...extraStyles,
        backgroundColor: "#f0f0f0",
      }}
      onClick={toChangeTheme}
    >
      <img
        src={dark_mode}
        alt="Dark mode"
        style={{ display: theme !== "dark" ? "none" : "flex" }}
      />
      <img
        src={light_mode}
        alt="Light mode"
        style={{ display: theme === "dark" ? "none" : "flex" }}
      />
    </button>
  );
};

export default ChangeThemeBtn;
