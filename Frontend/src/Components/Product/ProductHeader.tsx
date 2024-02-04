import { IQueryObject } from "../../Types/ProductTypes";

import ProductReview from "./ProductReview";

function ProductHeader({ queryObj }: IQueryObject) {
  const { data } = queryObj;

  return (
    <div className="border-b ">
      <h1 className="text-fontSizeSecondaryHeader text-bold">
        {data.productTitle}
      </h1>
      <p className="font-bold">
        <span className="text-textBlue font-medium my-10 pr-2">Brand:</span>
        {data.productDetail.Brand}
      </p>
      <ProductReview />
    </div>
  );
}

export default ProductHeader;
