import { useContext } from "react";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { refreshTokenSetup } from "../utils/refreshTokenSetup";
import { Card } from "./Card/Card";
import { Navbar } from "./Navbar";
import { Notification } from "./Notification";

export const Login = (props) => {
  const { userData, setUserData } = useContext(AuthContext);
  const [response, setResponse] = useState({});
  const navigate = useNavigate();

  const onSuccess = (res) => {
    const responseObj = res;
    localStorage.setItem("userData", JSON.stringify(responseObj.profileObj));
    setUserData(responseObj.profileObj);
    setResponse({ ...responseObj, success: true, isVisible: true });
    refreshTokenSetup(responseObj);
    hideNotification();
  };

  const onFailed = (res) => {
    console.log("Error:", res);
    setResponse({ ...res, success: false, isVisible: true });
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

  return (
    <>
      <Navbar />
      <div className="container is-max-desktop is-flex is-justify-content-center">
        <Card title={"Login"} className="mt-6 p-5">
          <GoogleLogin
            clientId={props.clientId}
            onSuccess={onSuccess}
            onFailure={onFailed}
            theme="dark"
          />
        </Card>
      </div>
      {response.isVisible && response.success ? (
        <Notification show={response.isVisible} variant="is-success">
          Logged as {userData?.email}
        </Notification>
      ) : (
        <Notification show={response.isVisible} variant="is-danger">
          An error has occured
        </Notification>
      )}
    </>
  );
};
