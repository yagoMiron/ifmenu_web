const URL_API = "https://apiifmenu-production.up.railway.app";
import axios from "axios";

type Props = {
  id: string;
  token: string;
  avaliacao: number;
};

const postAvaliacao = async ({ id, avaliacao, token }: Props) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  await axios.post(
    `${URL_API}/api/pratos/${id}/avaliar`,
    { avaliacao },
    config
  );
};
export default postAvaliacao;
