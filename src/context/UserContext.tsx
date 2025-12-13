import { createContext, useEffect, useState, type ReactNode } from "react";

type UserType = {
  authTime: number;
  exp: number;
  token: string;
  name: string;
  email: string;
  theme: string;
  setAuthTime: (newState: number) => void;
  setExp: (newState: number) => void;
  setToken: (newState: string) => void;
  setName: (newState: string) => void;
  setEmail: (newState: string) => void;
  setTheme: (newState: string) => void;
  isSessionValid: () => boolean;
};

const initialValue: UserType = {
  token: localStorage.getItem("token") || "",
  authTime: localStorage.getItem("authTime")
    ? Number(localStorage.getItem("authTime"))
    : 0,
  exp: localStorage.getItem("exp") ? Number(localStorage.getItem("exp")) : 0,
  name: localStorage.getItem("name") || "",
  email: localStorage.getItem("email") || "",
  theme: localStorage.getItem("theme") || "dark",
  setAuthTime: () => {},
  setExp: () => {},
  setToken: () => {},
  setName: () => {},
  setEmail: () => {},
  setTheme: () => {},
  isSessionValid: () => false,
};

export const UserContext = createContext(initialValue);

type UserContextProps = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [authTime, setAuthTime] = useState<number>(initialValue.authTime);
  const [exp, setExp] = useState<number>(initialValue.exp);
  const [token, setToken] = useState(initialValue.token);
  const [name, setName] = useState<string>(initialValue.name);
  const [email, setEmail] = useState<string>(initialValue.email);
  const [theme, setTheme] = useState<string>(initialValue.theme);

  useEffect(() => {
    localStorage.setItem("authTime", authTime.toString());
    localStorage.setItem("exp", exp.toString());
    localStorage.setItem("token", token);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("theme", theme);
  }, [authTime, exp, token, name, email, theme]);

  return (
    <UserContext.Provider
      value={{
        authTime,
        exp,
        token,
        name,
        email,
        theme,
        setAuthTime,
        setExp,
        setToken,
        setName,
        setEmail,
        setTheme,
        isSessionValid: () => {
          const timestamp = new Date().getTime();
          const diff = exp - timestamp;
          return true;
          return diff > 0;
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
