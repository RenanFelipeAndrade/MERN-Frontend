import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Articles } from "./components/Articles";
import { Login } from "./components/Navbar/Login";
import { Logout } from "./components/Navbar/Logout";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { RequireAuth } from "./components/RequireAuth";

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
      <Route
        path="/articles"
        element={
          <RequireAuth>
            <Articles />
          </RequireAuth>
        }
      />
      <Route path="/logout" element={<Logout clientId={clientId} />} />
      <Route path="/login" element={<Login clientId={clientId} />} />
    </Routes>
  );
};
