import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";

const API_URL = "https://apiifmenu-production.up.railway.app";

const redirectUri = Linking.createURL("auth"); // ex: seuapp://auth

const loginWithGoogle = async () => {
  const authUrl = `${API_URL}/api/auth/google?redirect_uri=${encodeURIComponent(
    redirectUri
  )}`;
  const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUri);

  if (result.type === "success" && result.url) {
    const token = new URL(result.url).searchParams.get("token");
    return token;
  }
};

export default loginWithGoogle;
