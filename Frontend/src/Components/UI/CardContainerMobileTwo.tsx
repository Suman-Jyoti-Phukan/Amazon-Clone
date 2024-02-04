import { CardContainerMobileProps } from "../../Types/ProductTypes";
import Card from "./Card";

function CardContainerMobileTwo({ sortQueryFn }: CardContainerMobileProps) {
  const title = "Latest Launch";
  const data = sortQueryFn("mobile").slice(3, 7);

  return (
    <>
      <Card queryObj={{ data, title }} />
    </>
  );
}

export default CardContainerMobileTwo;
