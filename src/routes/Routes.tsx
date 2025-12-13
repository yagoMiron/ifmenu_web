import type { RouteObject } from "react-router-dom";
import Login from "../pages/Login";
import PratoDoDia from "../pages/PratoDoDia";
import Calendario from "../pages/Calendario";
import Favoritos from "../pages/Favoritos";
import Logout from "../pages/Logout";
import ProtectedRoute from "../components/ProtectedRoute";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AuthSuccess from "../pages/AuthSuccess";
import { MainLayout } from "../layout/MainLayout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/auth/success",
    element: <AuthSuccess />,
  },
  {
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/home", element: <Home /> },
      { path: "/prato_do_dia", element: <PratoDoDia /> },
      { path: "/calendario", element: <Calendario /> },
      { path: "/favoritos", element: <Favoritos /> },
    ],
  },
  {
    path: "/logout",
    element: (
      <ProtectedRoute>
        <Logout />
      </ProtectedRoute>
    ),
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];
