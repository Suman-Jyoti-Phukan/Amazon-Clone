import { IQueryObject } from "../../Types/ProductTypes";
import ProductDiscount from "./ProductDiscount";

function ProductPrice({ queryObj }: IQueryObject) {
  const { data } = queryObj;

  const rupeeSign = "\u20B9";

  return (
    <div className="border-b border-textNavLight">
      {data.discount ? (
        <ProductDiscount
          productPrice={{ price: data.price, discount: data.discount }}
        />
      ) : (
        ""
      )}
      <p className="text-fontSizeSecondary text-textLightGray">
        M.R.P. :
        <span className="pl-1 ">
          {rupeeSign}
          <span className={`${data.discount ? "line-through" : ""}`}>
            {data.price}
          </span>
        </span>
      </p>
      <p className="mt-4">Inclusive of all taxes</p>
      <p className="mt-2">
        <strong>EMI</strong> not available
      </p>
    </div>
  );
}

export default ProductPrice;
