import { useContext, useEffect, createContext, useState } from "react";

const AuthContext = createContext({});

export const useAuth = () => {
  const { userData, setUserData, loading, setLoading, accessToken } =
    useContext(AuthContext);

  return { userData, setUserData, loading, setLoading, accessToken };
};

export const AuthContextProvider = ({ children }) => {
  const localUserData = localStorage.getItem("userData");
  const accessToken = localStorage.getItem("accessToken");
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // update userData state if already logged in
    localUserData && setUserData(JSON.parse(localUserData));
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ userData, setUserData, loading, setLoading, accessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
