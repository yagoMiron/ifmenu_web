import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function AuthSuccess() {
  const navigate = useNavigate();
  const { setName, setEmail, setExp, setToken, setAuthTime } =
    useContext(UserContext);

  useEffect(() => {
    // pegar parâmetros da URL
    const params = new URLSearchParams(window.location.search);

    const token = params.get("token");
    const user = params.get("user");

    if (!token || !user) {
      navigate("/login");
      return;
    }

    const parsedUser = JSON.parse(decodeURIComponent(user));

    // salvar no localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(parsedUser));

    // salvar no contexto
    setToken(token);

    const { name, email } = parsedUser;
    setName(name);
    setEmail(email);

    const dataExp = new Date().getTime(); // Pega a data atual
    setAuthTime(dataExp);
    setExp(dataExp + 7 * 24 + 60 + 60 + 1000); // Adiciona 7 dias

    // redirecionar
    navigate("/home");
  }, []);

  return <p>Carregando...</p>;
}
