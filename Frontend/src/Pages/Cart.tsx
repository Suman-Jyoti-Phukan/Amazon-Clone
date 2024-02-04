import Spinner from "../Components/UI/Spinner";

import useUser from "../Custom Hooks/useUser";
import { IProduct } from "../Types/ProductTypes";
import CustomError from "../Components/UI/CustomError";
import useDeleteProduct from "../Custom Hooks/useDeleteProduct";

interface Item {
  price: number;
}

function Cart() {
  const { isLoading, isError, data } = useUser();

  const {
    mutate: deleteProduct,
    isLoading: isDeleteLoading,
    isError: isDeleteError,
  } = useDeleteProduct();

  const rupeeSign = "\u20B9";

  if (isLoading || isDeleteLoading) {
    return;
    <div className="h-full flex items-center justify-center">
      <Spinner />;
    </div>;
  }

  if (isError || isDeleteError) {
    return <CustomError errMsg="Error Loading Cart! Please try again." />;
  }

  const { userCart } = data.user;

  if (!data || data.length === 0) return <p>Cart Is Empty</p>;

  const calculatePriceAfterDiscount = (product: IProduct) => {
    return product.discount
      ? product.price - (product.discount / 100) * product.price
      : "";
  };

  if (data.user.userCart.length <= 0)
    return (
      <p className="font-bold text-center text-xl my-[10rem]">
        Your Cart is empty. Please add items
      </p>
    );

  function calcTotalPrice(arr: Item[]): number {
    return arr.reduce((acc: number, item: Item) => acc + item.price, 0);
  }

  const totalPrice =
    data.user.userCart.length > 0 ? calcTotalPrice(data.user.userCart) : 0;

  console.log(totalPrice);

  return (
    <section>
      <div className="flex justify-between border-b border-textNavLight px-4 py-2">
        <h2 className="text-fontSizeSecondaryHeader">Shopping Cart</h2>
        <p className="text-fontSizeHeader">Price</p>
      </div>
      {userCart.map((product: IProduct) => (
        <div key={product._id} className="bg-white border-b pt-4">
          <div className="grid grid-cols-[30fr,50fr,20fr] max-h-[10rem]">
            <div className="flex items-center justify-center">
              <img
                src={product.image}
                alt={product.productTitle}
                className="w-[10rem] max-h-[6]"
              />
            </div>

            <div>
              <h2 className="font-bold text-fontSizeHeader mb-2">
                {product.productTitle}
              </h2>

              <button
                onClick={() => deleteProduct(product._id)}
                className="py-2 px-4 bg-blue-600 text-white"
              >
                Delete
              </button>
            </div>
          </div>

          <div className="flex justify-end mr-10 text-fontSizeHeader font-semi">
            <div className="">
              <p className="font-bold">
                <span className="font-semi">
                  <span className="text-red-500 pr-1">{rupeeSign}</span>
                  {product.discount
                    ? Number(calculatePriceAfterDiscount(product))
                    : product.price}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="h-10 text-white text-end py-2 pr-6 bg border-b border-white text-bold my-2">
        <p className="bg-blue-500 inline p-2 cursor-pointer hover:bg-blue-600">
          Total : <span className="text-red-700 pr-1">{rupeeSign}</span>
          {totalPrice}
        </p>
      </div>
      <div className="h-10  text-white text-end py-2 pr-6 bg text-bold">
        <p className="bg-blue-500 inline p-2 cursor-pointer hover:bg-blue-600">
          Proceed To Pay
        </p>
      </div>
    </section>
  );
}

export default Cart;
