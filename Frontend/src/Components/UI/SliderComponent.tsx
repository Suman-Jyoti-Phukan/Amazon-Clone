import { NavLink } from "react-router-dom";
import SliderImage from "./SliderImage";

function SliderComponent() {
  return (
    <>
      <div className="bg-cardBg pt-8 pb-2 px-6">
        <div className="flex items-center gap-x-5">
          <h2 className="text-fontSizeHeader">Today's Deal</h2>
          <NavLink to="/products/search?category=mobile">
            Explore More Items
          </NavLink>
        </div>
        <SliderImage />
      </div>
    </>
  );
}

export default SliderComponent;
