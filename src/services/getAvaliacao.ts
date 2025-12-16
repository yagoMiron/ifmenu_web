const URL_API = import.meta.env.VITE_API_URL;
import axios from "axios";

type Props = {
  id: string;
  token: string;
};

const getAvaliacao = async ({ id, token }: Props) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.get(
    `${URL_API}/api/pratos/${id}/minha-avaliacao`,
    config
  );
  if (response.data.avaliacao) {
    return response.data.avaliacao.avaliacao;
  }
};
export default getAvaliacao;
