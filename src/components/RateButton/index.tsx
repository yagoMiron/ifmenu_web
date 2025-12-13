import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Reactions from "../../enums/reactions";
import styles from "./styles.module.css";
import Colors from "../../enums/colors";

type Props = {
  emogiValue: number;
  rate: number;
  setAvaliacao: (avaliacao: number) => void;
};

const RateBtn = ({ emogiValue, rate, setAvaliacao }: Props) => {
  const { theme } = useContext(UserContext);
  const retornaImg = (value: number) => {
    switch (value) {
      case 1:
        return Reactions.CRY_EMOGI;
      case 2:
        return Reactions.SAD_EMOGI;
      case 3:
        return Reactions.NEUTRAL_EMOGI;
      case 4:
        return Reactions.SMILE_EMOGI;
      default:
        return Reactions.HAPPY_EMOGI;
    }
  };
  const retornaGIF = (value: number) => {
    switch (value) {
      case 1:
        return Reactions.CRY_GIF;
      case 2:
        return Reactions.SAD_GIF;
      case 3:
        return Reactions.NEUTRAL_GIF;
      case 4:
        return Reactions.SMILE_GIF;
      default:
        return Reactions.HAPPY_GIF;
    }
  };
  const retornaTitle = (value: number) => {
    switch (value) {
      case 1:
        return "Horrivel";
      case 2:
        return "Ruim";
      case 3:
        return "OK";
      case 4:
        return "Bom";
      default:
        return "Perfeito!";
    }
  };
  return (
    <div
      style={{
        alignItems: "center",
        height: "100%",
        flex: 1,
      }}
    >
      <button
        className={styles.ratingBtn}
        style={{
          flex: rate === emogiValue ? 1.5 : 1,
          minHeight: 80,
        }}
        onClick={() => {
          setAvaliacao(emogiValue);
        }}
      >
        <img
          src={
            rate === emogiValue
              ? retornaGIF(emogiValue)
              : retornaImg(emogiValue)
          }
          className={styles.rating_img}
          style={{
            opacity: rate !== emogiValue ? 0.3 : 1,
          }}
          alt={retornaTitle(emogiValue)}
        />
      </button>
      <span
        className={styles.title}
        style={{
          color: theme === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT,
        }}
      >
        {retornaTitle(emogiValue)}
      </span>
    </div>
  );
};
export default RateBtn;
