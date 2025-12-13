import styles from "./styles.module.css";
import dishe from "../../assets/strogonof.jpg";
import star from "../../assets/star.svg";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

type Props = {
  name: string;
};

const FavoriteCard = ({ name }: Props) => {
  const { theme } = useContext(UserContext);
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: theme === "dark" ? "#ccc" : "#e5e5e5" }}
    >
      <img src={dishe} className={styles.disheImg} alt={name} />
      <span className={styles.textName}>{name}</span>
      <img src={star} alt="favorito" className={styles.star} />
    </div>
  );
};

export default FavoriteCard;
