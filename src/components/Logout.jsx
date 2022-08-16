import { useContext, useEffect } from "react";
import { useState } from "react";
import { useGoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Navbar } from "./Navbar";
import { Notification } from "./Notification";

export const Logout = ({ clientId, ...props }) => {
  const { setUserData } = useContext(AuthContext);
  const [response, setResponse] = useState({});
  const navigate = useNavigate();

  const onLogoutSuccess = () => {
    localStorage.removeItem("userData");
    setUserData({});
    setResponse({ success: true, isVisible: true });
    hideNotification();
  };

  const onFailure = (error) => {
    console.log("Error", error);
    setResponse({ ...error, success: false, isVisible: true });
    hideNotification();
  };

  const hideNotification = () => {
    setTimeout(() => {
      setResponse((previousResponse) => {
        return { ...previousResponse, isVisible: false };
      });
      navigate("/", { replace: true });
    }, 3000);
  };

  // if placed above it will break because the functions have not been defined
  const { signOut, loaded } = useGoogleLogout({
    clientId: clientId,
    onLogoutSuccess: onLogoutSuccess,
    onFailure: onFailure,
  });

  useEffect(() => {
    if (loaded) signOut();
  }, [loaded]);

  return (
    <>
      <Navbar />
      {response.isVisible && response.success ? (
        <Notification show={response.isVisible} variant="is-success">
          Successfully logged out
        </Notification>
      ) : (
        <Notification show={response.isVisible} variant="is-danger">
          An error has occured
        </Notification>
      )}
    </>
  );
};
