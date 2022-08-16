import { useEffect } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const localUserData = localStorage.getItem("userData");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // update userData state if already logged in
    localUserData && setUserData(JSON.parse(localUserData));
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
