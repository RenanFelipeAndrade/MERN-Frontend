import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LoadingScreen } from "./LoadingScreen";

export const RequireAuth = ({ children }) => {
  const { userData, loading } = useAuth();

  if (loading) return <LoadingScreen />;

  return Object.keys(userData).length > 0 ? (
    children
  ) : (
    <Navigate to={"/"} replace />
  );
};
