import { UserContext } from "../../context/UserContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setExp, setAuthTime, setToken, setEmail, setName } =
    useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fazerLogout = async () => {
      setExp(0);
      setAuthTime(0);
      setToken("");
      setEmail("");
      setName("");
      navigate("/");
    };
    fazerLogout();
  });

  return <div></div>;
};

export default Logout;
