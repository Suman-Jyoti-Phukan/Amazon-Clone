import { useParams } from "react-router-dom";
import useProductData from "../../Custom Hooks/useProductData";

import CustomError from "../UI/CustomError";
import SkeletonBox from "../UI/SkeletonBox";

function ProductImage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useProductData(String(id));

  if (isLoading) {
    return <SkeletonBox length={1} />;
  }

  if (isError) {
    return <CustomError errMsg={`Failed Loading Product`} />;
  }

  return (
    <div>
      <div className="flex items-center justify-center  ">
        <img
          src={data.image}
          alt={data.product}
          className="object-contain max-h-[25rem] max-w-[20rem]"
        />
      </div>
    </div>
  );
}

export default ProductImage;
