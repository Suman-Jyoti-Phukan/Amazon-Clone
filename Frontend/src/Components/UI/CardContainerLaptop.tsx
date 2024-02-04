import { CardContainerMobileProps } from "../../Types/ProductTypes";
import Card from "./Card";

function CardContainerLaptop({ sortQueryFn }: CardContainerMobileProps) {
  const title = "Best Gaming | Gaming Beasts";
  const data = sortQueryFn("laptop").slice(0, 4);
  return (
    <>
      <Card queryObj={{ data, title }} />
    </>
  );
}

export default CardContainerLaptop;
