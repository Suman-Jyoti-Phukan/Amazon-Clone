import { ReactNode, useEffect } from "react";
import Spinner from "../Components/UI/Spinner";
import useUser from "../Custom Hooks/useUser";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isError, isLoading, isAuthenticated } = useUser();

  const navigate = useNavigate();

  console.log(isAuthenticated, "Protected Route");

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading && !isError) navigate("/login");
    },
    [isError, isLoading, isAuthenticated, navigate]
  );

  if (isLoading)
    return (
      <div className="h-[100dvh] flex items-center justify-center">
        <Spinner size={60} />;
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
