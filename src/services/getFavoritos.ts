const URL_API = import.meta.env.VITE_API_URL;
import axios from "axios";

const getFavoritos = async (token: string) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.get(`${URL_API}/api/auth/favoritos`, config);

  const favoritos = response.data?.favoritos;
  if (favoritos instanceof Array) {
    const favList = favoritos.map((prato) => {
      return {
        nome: prato.nome,
        imagem: prato.imagem,
      };
    });

    return favList;
  }
};
export default getFavoritos;
