import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import Spinner from "../Components/Spinner/Spinner";
import AuthContext from "../AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <>
        <Spinner></Spinner>
      </>
    );
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
