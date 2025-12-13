const URL_API = "https://apiifmenu-production.up.railway.app";
import axios from "axios";

type Props = {
  pratoId: string;
  token: string;
};

const postFavoritos = async ({ pratoId, token }: Props) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.post(
    `${URL_API}/api/auth/favoritos/${pratoId}`,
    {},
    config
  );
  console.log(response);
};
export default postFavoritos;
