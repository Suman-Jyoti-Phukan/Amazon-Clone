import { useQuery } from "react-query";
import { fetchAllProductCustom } from "../utils/fetchProduct";

const useProductQuery = (query: string, ...queryKey: Array<string>) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKey, query],
    queryFn: () => fetchAllProductCustom(query),
  });

  return { data, isLoading, isError };
};

export default useProductQuery;
