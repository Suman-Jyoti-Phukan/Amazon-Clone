import SortProducts from "../Components/UI/SortProducts";
import AllProductsLayout from "../Components/UI/AllProductsLayout";
import { useEffect, useState } from "react";
import useProductQuery from "../Custom Hooks/useProductQuery";
import { IProduct } from "../Types/ProductTypes";
import { useSearchParams } from "react-router-dom";
import SkeletonBox from "../Components/UI/SkeletonBox";

interface IProductQuery {
  data: Array<IProduct>;
  isLoading: boolean;
  isError: boolean;
}

function AllProducts() {
  const [isDiscout] = useState<boolean>(false);

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category")!;

  const sortBy = searchParams.get("sort")!;

  const queryString = sortBy
    ? `?category=${category}&sort=${sortBy}`
    : `?category=${category}`;

  const { data, isLoading, isError }: IProductQuery = useProductQuery(
    queryString,
    category,
    sortBy
  );

  useEffect(() => {
    const header = document.querySelector("header")! as HTMLHeadElement;

    header.scrollIntoView({ behavior: "smooth" });
  }, []);

  if (isError) {
    return <div>Error Loading Data</div>;
  }
  return (
    <section>
      <div className="grid grid-cols-[17fr,83fr]">
        <SortProducts />
        {isLoading ? (
          <SkeletonBox length={4} />
        ) : (
          <AllProductsLayout data={data} isDiscount={isDiscout} />
        )}
      </div>
    </section>
  );
}

export default AllProducts;
