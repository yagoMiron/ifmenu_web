import { useContext, useEffect, useState } from "react";
import ChangeThemeBtn from "../../components/ChangeThemeBtn";
import Colors from "../../enums/colors";
import Separator from "../../components/Separator";
import LoginButton from "../../components/LoginButton";
import dot_dark from "../../assets/dot_dark.svg";
import dot_light from "../../assets/dot_light.svg";
import dot_error from "../../assets/dot_error.svg";

import logo from "../../assets/menu2.svg";
import styles from "./styles.module.css";
import ImageBackground from "../../components/ImageBackground";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const TelaInicial = () => {
  const navigate = useNavigate();
  const { theme, isSessionValid } = useContext(UserContext);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (isSessionValid()) {
      navigate("/home");
    }
  });
  useEffect(() => {
    const verificaErro = async () => {
      const params = new URLSearchParams(window.location.search);
      const error = params.get("error");
      if (error) {
        setErro(error);
      }
    };
    verificaErro();
  }, []);

  const backgroundColor = theme === "dark" ? Colors.BG_DARK : Colors.BG_LIGHT;
  const fontColor = theme === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT;
  return (
    <ImageBackground theme={theme}>
      <div
        className={styles.main}
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <div
          className={styles.logo}
          style={{
            backgroundColor: backgroundColor,
          }}
        >
          <img src={logo} alt="IFmenu" />
        </div>
        <div className={styles.offset}>
          {erro ? (
            <div className={styles.titlebox}>
              <img className={styles.dot} src={dot_error} alt="." />
              <span
                className={styles.error}
                style={{
                  color: Colors.ERROR,
                }}
              >
                <strong style={{ textDecoration: "underline" }}>
                  ERRO AO LOGAR:
                </strong>
                Use seu Email Institucional
              </span>
            </div>
          ) : (
            <>
              <div className={styles.titlebox}>
                <img
                  className={styles.dot}
                  src={theme === "dark" ? dot_dark : dot_light}
                  alt="."
                />
                <span
                  className={styles.title}
                  style={{
                    color: fontColor,
                  }}
                >
                  Bem Vindo ao IFmenu!
                </span>
              </div>
              <div className={styles.titlebox}>
                <img
                  className={styles.dot}
                  src={theme === "dark" ? dot_dark : dot_light}
                  alt="."
                />
                <span
                  className={styles.subtitle}
                  style={{
                    color: fontColor,
                    display: "inline-block",
                  }}
                >
                  Faça login usando o seu{" "}
                  <strong
                    style={{
                      display: "inline-block",
                      color: Colors.FONT_EMPHASIS_1,
                    }}
                  >
                    e-mail
                  </strong>{" "}
                  <strong
                    style={{
                      display: "inline-block",
                      color: Colors.FONT_EMPHASIS_1,
                    }}
                  >
                    Institucional
                  </strong>{" "}
                  e comece a usar.
                </span>
              </div>
            </>
          )}
        </div>
        <Separator title="Login" />
        <LoginButton />
      </div>
      <ChangeThemeBtn fixed />
    </ImageBackground>
  );
};

export default TelaInicial;
