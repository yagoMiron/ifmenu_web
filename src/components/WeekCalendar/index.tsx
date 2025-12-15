import { useContext } from "react";
import dishe from "../../assets/strogonof.jpg";
import { UserContext } from "../../context/UserContext";
import styles from "./styles.module.css";

const hoje = new Date();
const diaEmMillisegundos = 24 * 60 * 60 * 1000;

const data = [
  {
    dia: hoje,
    seraServido: false,
    nome: "-",
  },
  {
    dia: new Date(hoje.getTime() + diaEmMillisegundos),
    seraServido: true,
    nome: "Strogonof",
  },
  {
    dia: new Date(hoje.getTime() + diaEmMillisegundos * 2),
    seraServido: true,
    nome: "Strogonof",
  },
  {
    dia: new Date(hoje.getTime() + diaEmMillisegundos * 3),
    seraServido: true,
    nome: "Strogonof",
  },
  {
    dia: new Date(hoje.getTime() + diaEmMillisegundos * 4),
    seraServido: true,
    nome: "Strogonof",
  },
  {
    dia: new Date(hoje.getTime() + diaEmMillisegundos * 5),
    seraServido: true,
    nome: "Strogonof",
  },
  {
    dia: new Date(hoje.getTime() + diaEmMillisegundos * 6),
    seraServido: false,
    nome: "-",
  },
];

const WeekCalendar = () => {
  const { theme } = useContext(UserContext);
  const getDayName = (day: number) => {
    switch (day) {
      case 0:
        return "DOM";
      case 1:
        return "SEG";
      case 2:
        return "TER";
      case 3:
        return "QUA";
      case 4:
        return "QUI";
      case 5:
        return "SEX";
      case 6:
        return "SAB";
      default:
        return "";
    }
  };
  const Item = ({
    item,
  }: {
    item: {
      dia: Date;
      seraServido: boolean;
      nome: string;
    };
  }) => (
    <div className={styles.weekRow}>
      <div className={styles.dayCollum}>
        <span className={styles.infoText} style={{ fontSize: 32 }}>
          {item.dia.getDate()}
        </span>
        <span className={styles.infoText} style={{ fontSize: 16 }}>
          {getDayName(item.dia.getDay())}
        </span>
      </div>
      <div className={styles.titleCollum}>
        <span className={styles.infoText} style={{ fontSize: 16 }}>
          {item.nome}
        </span>
      </div>
      <div className={styles.disheCollum}>
        {item.seraServido ? (
          <img className={styles.img} src={dishe} alt={item.nome} />
        ) : (
          <span className={styles.infoText} style={{ fontSize: 16 }}>
            -
          </span>
        )}
      </div>
    </div>
  );
  return (
    <div className={styles.main}>
      <div
        className={styles.header}
        style={{ color: theme === "dark" ? "#f0f0f0" : "#0f0f0f" }}
      >
        <div className={styles.dayCollum}>
          <span className={styles.titleText}>DIA</span>
        </div>

        <div className={styles.titleCollum}>
          <span className={styles.titleText}>NOME</span>
        </div>
        <div className={styles.disheCollum}>
          <span className={styles.titleText}>PRATO</span>
        </div>
      </div>
      <div
        className={styles.calendar}
        style={{ backgroundColor: theme === "dark" ? "#ccc" : "#e5e5e5" }}
      >
        {data.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WeekCalendar;
