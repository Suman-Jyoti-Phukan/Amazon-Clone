import { useMutation } from "react-query";
import { updateCurrentUserCart } from "../utils/apiUser";

function useUpdateCart() {
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: (productId: string) => updateCurrentUserCart(productId),
  });

  return { mutate, isLoading, isError };
}

export default useUpdateCart;
