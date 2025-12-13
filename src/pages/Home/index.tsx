import Advice from "../../components/Advice";
import Balloon from "../../components/Balloon";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import calendar from "../../assets/calendar.svg";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <Advice
          message="AVISO: Do dia 04 ao dia 15 desse mes estarão suspensas as merendas
            escolares por divos de _______"
          severity="Critica"
        />
        <Link to={"/prato"}>
          <Balloon direction="right">
            <div className={styles.innerBalloon}>
              <img src={calendar} alt="" />
              <span>
                Já experimentou o prato de hoje? Avalie a merenda aqui.
              </span>
            </div>
          </Balloon>
        </Link>
        <Link to={"/calendar"}>
          <Balloon>
            <div className={styles.innerBalloon}>
              <span>
                Quer saber o prato de amanhã? Confira os pratos da semana aqui.
              </span>
              <img src={calendar} alt="" />
            </div>
          </Balloon>
        </Link>
        <Link to={"/favoritos"}>
          <Balloon direction="right">
            <div className={styles.innerBalloon}>
              <img src={calendar} alt="" />
              <span>
                Quer saber o prato de amanhã? Confira os pratos da semana aqui.
              </span>
            </div>
          </Balloon>
        </Link>
      </div>
    </div>
  );
};

export default Home;
