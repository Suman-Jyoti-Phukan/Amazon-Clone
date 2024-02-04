import useProductQuery from "../../Custom Hooks/useProductQuery";
import CardContainerAds from "./CardContainerAds";
import CardContainerClothing from "./CardContainerClothing";
import CardContainerLaptop from "./CardContainerLaptop";
import CardContainerMobile from "./CardContainerMobile";
import CardContainerMobileThree from "./CardContainerMobileThree";
import CardContainerMobileTwo from "./CardContainerMobileTwo";
import CardContainerWatch from "./CardContainerWatch";
import { IProduct } from "../Product/ProductCard";
import SkeletonBox from "./SkeletonBox";

function CardMain() {
  const { data, isLoading } = useProductQuery("", "all-products");

  function sortQueryData(filterData: string) {
    const sortedData = data?.filter(
      (item: IProduct) => item.category === filterData
    );

    return sortedData;
  }

  return (
    <>
      {isLoading ? (
        <SkeletonBox length={6} />
      ) : (
        <main className="grid grid-cols-2 md:grid-cols-4 gap-5 -translate-y-[2rem] justify-center">
          <CardContainerMobile sortQueryFn={sortQueryData} />
          <CardContainerWatch sortQueryFn={sortQueryData} />
          <CardContainerLaptop sortQueryFn={sortQueryData} />
          <CardContainerAds sortQueryFn={sortQueryData} />
          <CardContainerMobileTwo sortQueryFn={sortQueryData} />
          <CardContainerMobileThree sortQueryFn={sortQueryData} />
          <CardContainerClothing sortQueryFn={sortQueryData} />
        </main>
      )}
    </>
  );
}

export default CardMain;
