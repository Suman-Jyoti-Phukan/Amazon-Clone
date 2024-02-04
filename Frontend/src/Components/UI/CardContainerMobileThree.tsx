import { CardContainerMobileProps } from "../../Types/ProductTypes";
import Card from "./Card";

function CardContainerMobileThree({ sortQueryFn }: CardContainerMobileProps) {
  const title = "Apple's Latest Release";

  const res = sortQueryFn("mobile");

  const data = res
    .filter((item) => item.productDetail.Brand === "Apple")
    .slice(0, 4);

  return (
    <>
      <Card queryObj={{ data, title }} />
    </>
  );
}

export default CardContainerMobileThree;
