import { IQueryObject } from "../../Types/ProductTypes";

function ProductDescription({ queryObj }: IQueryObject) {
  const { data } = queryObj;

  console.log(data);

  return (
    <div className="mt-4">
      <h2 className="text-fontSizeHeader font-bold">About this product </h2>
      <div>
        <ul className="list-disc px-5 flex flex-col gap-y-4 mt-2">
          {data.productDesc.length > 0 ? (
            data.productDesc.map((item, i) => <li key={i}>{item}</li>)
          ) : (
            <p>No description available</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProductDescription;
