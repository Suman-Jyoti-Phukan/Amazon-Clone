import { useRef } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import useProductQuery from "../../Custom Hooks/useProductQuery";
import { IProduct } from "../../Types/ProductTypes";

import SkeletonBox from "./SkeletonBox";
import CustomError from "./CustomError";
import { NavLink } from "react-router-dom";

function Slider() {
  const { data, isLoading, isError } = useProductQuery(
    "?discount[gt]=5&field=productTitle,image,discount,category",
    "sliderImages"
  );

  console.log("Slider", data);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollAmount: number = 600;

  if (isLoading) {
    return <SkeletonBox length={1} />;
  }

  if (isError) {
    return <CustomError errMsg="Failed Loading Slider" />;
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

      {/* Slider Card Container  */}
      <div
        ref={scrollContainerRef}
        className="grid grid-flow-col auto-cols-[19%] overflow-x-auto gap-x-2 overflow-y-hidden rounded-sm mb-2"
        style={{ width: "100%" }}
      >
        {data.map((item: IProduct) => (
          <NavLink to={`/product/${item._id}`}>
            <div
              key={item.productTitle}
              className="max-w-[18rem] h-[18rem] rounded-md mb-8"
            >
              <img
                src={`${item.image}`}
                alt="Image"
                className="h-[80%] w-full object-fit bg-bodyMain"
              />

              <p className="font-semi text-fontSizeSecondary my-4 text-red-400">
                <span className="bg-red-600 p-1 text-textPrimary">
                  Upto {item.discount} % off
                </span>
                Deal Of The Day
              </p>
              <p>Best {item.category} Deals.</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Slider;
