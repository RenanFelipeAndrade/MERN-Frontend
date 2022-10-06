import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const RequireAuth = ({ children }) => {
  const { userData } = useAuth();

  return Object.keys(userData).length > 0 ? (
    children
  ) : (
    <Navigate to={"/"} replace />
  );
};
