import { useState } from "react";
import ReviewStars from "../UI/ReviewStars";

function ProductReview() {
  const [review] = useState<number>(4.1);

  const [totalRating] = useState<number>(1000);

  const [questionAnswered] = useState<number>(100);

  function generateRandomSellUnit(soldUnit: number) {
    return Math.floor(Math.random() * soldUnit);
  }

  return (
    <div className="border-textNavLight border-b">
      <div className="flex font-bold py-2">
        <p className="pr-2 text-textBlue">{review}</p>
        <ReviewStars />
        <p>
          <span className="text-textBlue px-1">{totalRating}</span>| Total
          Questions Answer :
          <span className="text-textBlue pl-2">{questionAnswered}</span>
        </p>
      </div>
      <p className="font-semi">Recently sold {generateRandomSellUnit(1000)}</p>
    </div>
  );
}

export default ProductReview;
