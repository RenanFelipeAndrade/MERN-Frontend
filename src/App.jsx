import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Articles } from "./components/Articles";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { useEffect } from "react";
import { gapi } from "gapi-script";

export const App = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;

  useEffect(() => {
    // new Google's api requirements
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/login" element={<Login clientId={clientId} />} />
      <Route path="/logout" element={<Logout clientId={clientId} />} />
    </Routes>
  );
};
