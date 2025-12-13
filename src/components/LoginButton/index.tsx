import google from "../../assets/google.png";
import styles from "./styles.module.css";

const API_URL = "https://apiifmenu-production.up.railway.app";

export default function LoginButton() {
  const loginWithGoogle = async () => {
    // Enviar a URL atual do frontend como redirect_uri para o backend
    const redirectUri = encodeURIComponent(window.location.origin);

    // Redirecionar o usuário para o backend (fluxo OAuth)
    window.location.href = `${API_URL}/api/auth/google?redirect_uri=${redirectUri}`;
  };

  return (
    <button className={styles.btn} onClick={loginWithGoogle}>
      <img src={google} className={styles.btn_img} />
      <span className={styles.btnText}>Entrar com Google</span>
    </button>
  );
}
