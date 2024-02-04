import { useQuery } from "react-query";
import { fetchProduct } from "../utils/fetchProduct";

const useProductData = (id: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  return { data, isLoading, isError };
};

export default useProductData;
