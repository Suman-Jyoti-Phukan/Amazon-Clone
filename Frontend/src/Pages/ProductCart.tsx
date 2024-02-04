import { useState } from "react";

import { FaLock } from "react-icons/fa";

import { useParams } from "react-router-dom";

import Button from "../Components/UI/Button";
import useUpdateCart from "../Custom Hooks/useUpdateCart";
import CustomError from "../Components/UI/CustomError";
import Spinner from "../Components/UI/Spinner";
import { useQueryClient } from "react-query";

function ProductCart() {
  const query = useQueryClient();

  const [delivery] = useState<string>("Jorhat");

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const { id } = useParams();

  const { isError, isLoading, mutate } = useUpdateCart();

  if (isError) return <CustomError />;

  function handleSuccess() {
    setIsSuccess((cur) => !cur);
  }

  function handleUpdatecart(productId: string) {
    mutate(productId, {
      onSuccess: () => {
        query.invalidateQueries({
          queryKey: ["currentUser"],
        });
        return handleSuccess();
      },
    });
  }

  return (
    <section>
      <div className="border border-textNavLight p-4 flex flex-col gap-y-2">
        <p className="text-textBlue font-bold">
          Free Delivery{" "}
          <span className="text-textPrimary">Friday,15 December</span> .Details
        </p>

        <p className="text-textBlue">
          Delivering to
          <span className=" font-bold text-textPrimary">{delivery}</span>
        </p>

        <p className="font-bold">Update Location</p>

        <p className="text-textBlue font-bold">In Stock</p>
        <p className="font-bold">
          Sold By <span className="text-textBlue">Suman Jyoti Phukan</span>
        </p>

        <Button
          onClick={() => handleUpdatecart(id ? id : "")}
          disabled={isSuccess}
        >
          {isLoading ? (
            <Spinner size={20} />
          ) : (
            `${isSuccess ? "Successfully Added" : "Add to cart"}`
          )}
        </Button>

        <Button>Buy Now</Button>

        <p className="flex items-center gap-x-4">
          <FaLock className="text-textNavLight" />
          Secure Transaction
        </p>

        <form action="#" className="flex items-center gap-x-4">
          <input type="checkbox" id="option" />
          <label htmlFor="option">Add gift options</label>
        </form>
      </div>
    </section>
  );
}

export default ProductCart;
