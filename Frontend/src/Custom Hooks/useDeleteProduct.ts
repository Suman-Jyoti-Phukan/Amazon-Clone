import { useMutation, useQueryClient } from "react-query";
import { deleteProduct } from "../utils/apiUser";

function useDeleteProduct() {
  const query = useQueryClient();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: (productId: string) => deleteProduct(productId),
    onSuccess: () =>
      query.invalidateQueries({
        queryKey: ["currentUser"],
      }),
  });

  return { mutate, isLoading, isError };
}

export default useDeleteProduct;
