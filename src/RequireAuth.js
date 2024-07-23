import { useEffect } from "react";
import { useAuth } from "./context/GlobalContext";
import { useNavigate } from "react-router-dom";
const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  return children;
};
export default RequireAuth;
