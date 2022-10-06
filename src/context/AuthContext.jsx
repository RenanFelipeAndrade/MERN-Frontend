import { useContext, useEffect, createContext, useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";

const AuthContext = createContext({});

export const useAuth = () => {
  const { userData, setUserData, accessToken } = useContext(AuthContext);
  return { userData, setUserData, accessToken };
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
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <AuthContext.Provider value={{ userData, setUserData, accessToken }}>
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};
