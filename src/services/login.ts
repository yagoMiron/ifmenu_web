const URL_API = "https://apiifmenu-production.up.railway.app";

import axios from "axios";

const API_URL = process.env.REACT_APP_API_KEY;

const login = async () => {
  const response = await axios.get(`${API_URL}/api/auth/google`);
  return response;
};
export default login;
