interface IPrice {
  price: number;
  discount: number;
}

function ProductDiscount({ productPrice }: { productPrice: IPrice }) {
  const { price, discount } = productPrice;

  const priceAfterDiscount = price - ((discount as number) / 100) * price;

  const rupeeSign = "\u20B9";

  return (
    <>
      <div className="flex text-fontSizeSecondaryHeader mt-4">
        <p className="text-red-500 pr-4">-{discount}%</p>
        <p className="flex items-start">
          <span className="text-[12px] pt-1">{rupeeSign}</span>
          {priceAfterDiscount.toFixed(2)}
        </p>
      </div>
    </>
  );
}

export default ProductDiscount;
