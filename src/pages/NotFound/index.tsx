import { useContext } from "react";
import ImageBackground from "../../components/ImageBackground";
import { UserContext } from "../../context/UserContext";
import styles from "./styles.module.css";
import notFound from "../../assets/404-error.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { theme } = useContext(UserContext);
  return (
    <ImageBackground theme={theme}>
      <div className={styles.main}>
        <img src={notFound} alt="Pagina não encontrada" />
        <Link to={"/"}>
          <span className={styles.returnBtn}>Voltar{" ➦"}</span>
        </Link>
      </div>
    </ImageBackground>
  );
};
export default NotFound;
