const URL_API = import.meta.env.VITE_API_URL;
import axios from "axios";

type Props = {
  pratoId: string;
  token: string;
};

const deleteFavoritos = async ({ pratoId, token }: Props) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  await axios.delete(`${URL_API}/api/auth/favoritos/${pratoId}`, config);
};
export default deleteFavoritos;
