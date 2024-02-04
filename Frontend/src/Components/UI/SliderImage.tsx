import useProductQuery from "../../Custom Hooks/useProductQuery";
import { useRef } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import { NavLink } from "react-router-dom";

import { IProduct } from "../../Types/ProductTypes";
import SkeletonBox from "./SkeletonBox";
import CustomError from "./CustomError";

function SliderImage() {
  const { data, isLoading, isError } = useProductQuery(
    "?category=laptop&category=clothing",
    "sliderImages"
  );

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollAmount: number = 600;

  if (isLoading) {
    return <SkeletonBox length={1} />;
  }

  if (isError) {
    return <CustomError errMsg="Failed Loading Slider Image" />;
  }

  const handleScroll = (scrollDirection: "left" | "right"): void => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;

      if (scrollDirection === "left") {
        scrollContainer.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else if (scrollDirection === "right") {
        scrollContainer.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="relative no-scrollbar">
      <button
        onClick={() => handleScroll("left")}
        className="absolute top-[40%] left-[0.5rem] transform -translate-y-1/2 h-24 px-2 border-2 border-transparent focus:border-blue-500 focus:outline outline-white bg-white"
      >
        <MdOutlineArrowBackIos size={30} />
      </button>
      <button
        onClick={() => handleScroll("right")}
        className="absolute top-[40%] right-0 transform -translate-y-1/2 h-24 px-2 border-2 border-transparent focus:border-blue-500 focus:outline outline-white bg-white"
      >
        <MdOutlineArrowForwardIos size={30} />
      </button>

      {/* SliderImage Card Container  */}
      <div
        ref={scrollContainerRef}
        className="grid grid-flow-col auto-cols-[17%] overflow-x-auto gap-x-2 overflow-y-hidden rounded-sm mb-2"
        style={{ width: "100%" }}
      >
        {data.map((item: IProduct) => (
          <div key={item._id} className="max-w-[18rem] h-[18rem] rounded-md">
            <NavLink to={`/product/${item._id}`}>
              <img
                src={`${item.image}`}
                alt="Image"
                className="h-[80%] object-contain"
              />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderImage;
