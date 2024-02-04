import ProductCard, { IProduct } from "../Product/ProductCard";

function AllProductsLayout({
  data,
  isDiscount,
}: {
  data: IProduct[];
  isDiscount: boolean;
}) {
  console.log(isDiscount);

  return (
    <div className="grid grid-cols-3 gap-10 p-2">
      {data.map((product) => (
        <div key={product._id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default AllProductsLayout;
