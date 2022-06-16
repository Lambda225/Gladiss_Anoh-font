import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ roles }) => {
  const { auth } = useAuth();
  console.log("auth", auth);
  const location = useLocation();
  return auth?.roles?.find((role) => roles?.includes(role)) ? (
    <Outlet />
  ) : auth?.accessToken ? ( //change à partie du token actualisé
    <Navigate to="/inscription" state={{ from: location }} replace />
  ) : (
    <Navigate to="/connexion" state={{ from: location }} replace />
  );
};

export default RequireAuth;
