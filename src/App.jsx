import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Articles } from "./components/Articles";

export const App = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  );
};
