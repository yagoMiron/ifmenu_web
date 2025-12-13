import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ImageBackground from "../../components/ImageBackground";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export function MainLayout() {
  const { theme } = useContext(UserContext);
  return (
    <div style={{ height: "100vh" }}>
      <Header />

      <div style={{ flex: 1 }}>
        <ImageBackground theme={theme}>
          <Outlet /> {/* Aqui as páginas internas aparecem */}
        </ImageBackground>
      </div>

      <Navbar />
    </div>
  );
}
