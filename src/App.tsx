import { useRoutes } from "react-router-dom";
import { routes } from "./routes/Routes";
import { UserContextProvider } from "./context/UserContext";
import "./App.css";

function App() {
  const elements = useRoutes(routes);
  return <UserContextProvider>{elements}</UserContextProvider>;
}

export default App;
