import { NavLink } from "react-router-dom";
import useUser from "../../Custom Hooks/useUser";
import { CardContainerMobileProps } from "../../Types/ProductTypes";

import Button from "./Button";
import Spinner from "./Spinner";

function CardContainerAds({ sortQueryFn }: CardContainerMobileProps) {
  const rupeeSign = "\u20B9";

  const productId = "657dee228627f10474fc3368";

  const [data] = sortQueryFn("mobile").filter((item) => item._id === productId);

  const { data: user, isLoading } = useUser();

  console.log(user);

  if (isLoading) <Spinner />;

  return (
    <div className="bg-white px-4">
      <div className="flex flex-col">
        <p className="my-5 text-center text-fontSizeHeader font-bold">
          Sign In For Best Experience
        </p>
        <Button
          customStyle={{
            addStyle: "font-bold",
          }}
        >
          {user
            ? `Exclusively for you , ${user.user.name.split(" ")[0]}!`
            : "Sign In"}
        </Button>
      </div>
      <NavLink to={`/product/${productId}`}>
        <div className="px-2">
          <div className="flex justify-center">
            <img
              src={data.image}
              alt={data.productTitle}
              className="w-[14rem] h-[14rem]"
            />
          </div>
          <p className="">{data.productTitle}</p>
          <p className="text-red-400 font-bold">
            {rupeeSign} {data.price}
          </p>
        </div>
      </NavLink>
    </div>
  );
}

export default CardContainerAds;
