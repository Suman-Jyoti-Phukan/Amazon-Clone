import ProductDescription from "./ProductDescription";
import ProductHeader from "./ProductHeader";
import ProductOverview from "./ProductOverview";
import ProductPrice from "./ProductPrice";
import useProductData from "../../Custom Hooks/useProductData";
import SkeletonList from "../UI/SkeletonList";
import { useParams } from "react-router-dom";
import React from "react";
import CustomError from "../UI/CustomError";

function ProductDetail() {
  const { id } = useParams();

  const { data, isLoading, isError } = useProductData(String(id));

  if (isLoading) {
    return (
      <div>
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <React.Fragment key={i}>
              <SkeletonList />
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  if (isError) return <CustomError errMsg="Failed Loading Data" />;

  return (
    <section className="px-4 ">
      <ProductHeader queryObj={{ data }} />
      <ProductPrice queryObj={{ data }} />
      <ProductOverview queryObj={{ data }} />
      <ProductDescription queryObj={{ data }} />
    </section>
  );
}

export default ProductDetail;
