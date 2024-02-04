import { CardContainerMobileProps } from "../../Types/ProductTypes";
import Card from "./Card";

function CardContainerClothing({ sortQueryFn }: CardContainerMobileProps) {
  const title = "Best mobile deals up to 60% off";
  const data = sortQueryFn("clothing").slice(0, 4);
  return (
    <>
      <Card queryObj={{ data, title }} />
    </>
  );
}

export default CardContainerClothing;
