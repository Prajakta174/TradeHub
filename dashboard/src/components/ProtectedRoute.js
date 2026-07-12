import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      window.location.href =
        "https://trade-hub-zeta.vercel.app/login?message=session-expired";
    }
  }, [user, loading]);

  if (loading) {
    return <h2>Checking your session...</h2>;
  }

  return children;
};

export default ProtectedRoute;
