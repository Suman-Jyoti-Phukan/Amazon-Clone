import { CardContainerMobileProps } from "../../Types/ProductTypes";
import Card from "./Card";

function CardContainerWatch({ sortQueryFn }: CardContainerMobileProps) {
  const title = "Classic Watch Collections";

  const data = sortQueryFn("watch").slice(0, 4);

  return (
    <>
      <Card queryObj={{ data, title }} />
    </>
  );
}

export default CardContainerWatch;
