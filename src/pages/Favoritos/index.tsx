import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import FavoriteCard from "../../components/FavoriteCard";
import styles from "./styles.module.css";
import star from "../../assets/star.svg";

const Favorites = () => {
  const { theme } = useContext(UserContext);
  return (
    <div className={styles.main}>
      <div
        className={styles.section}
        style={{ backgroundColor: theme === "dark" ? "#333" : "#fff" }}
      >
        <div className={styles.containerTop}>
          <div className={styles.titleContainer}>
            <img src={star} style={{ height: 12 }} alt="estrela" />
            <img src={star} style={{ height: 24 }} alt="estrela" />
            <h2
              className={styles.title}
              style={{ color: theme === "dark" ? "#ccc" : "#333" }}
            >
              Favoritos
            </h2>
            <img src={star} style={{ height: 24 }} alt="estrela" />
            <img src={star} style={{ height: 12 }} alt="estrela" />
          </div>
        </div>
        <div
          className={styles.scrollContainer}
          style={{ width: "100%", marginBottom: 40 }}
        >
          <FavoriteCard name="Strogonoth" />
          <FavoriteCard name="Strogonoth" />
          <FavoriteCard name="Strogonoth" />
          <FavoriteCard name="Strogonoth" />
          <FavoriteCard name="Strogonoth" />
          <FavoriteCard name="Strogonoth" />
          <FavoriteCard name="Strogonoth" />
          <FavoriteCard name="Strogonoth" />
          <FavoriteCard name="Strogonoth" />
        </div>
      </div>
    </div>
  );
};

export default Favorites;
