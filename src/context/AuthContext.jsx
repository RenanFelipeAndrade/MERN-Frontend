import { useContext, useEffect, createContext, useState } from "react";

const AuthContext = createContext({});

export const useAuth = () => {
  const { userData, setUserData, loading, setLoading } =
    useContext(AuthContext);

  return { userData, setUserData, loading, setLoading };
};

export const AuthContextProvider = ({ children }) => {
  const localUserData = localStorage.getItem("userData");
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // update userData state if already logged in
    localUserData && setUserData(JSON.parse(localUserData));
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ userData, setUserData, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
