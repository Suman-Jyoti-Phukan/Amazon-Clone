import { useQuery } from "react-query";
import { getCurrentSessionUser } from "../utils/apiAuth";

function useUser() {
  const { isLoading, isError, data } = useQuery({
    queryFn: getCurrentSessionUser,
    queryKey: ["currentUser"],
    retry: false,
  });

  return {
    isLoading,
    isError,
    isAuthenticated: data?.isAuthenticated === true,
    data,
  };
}

export default useUser;
