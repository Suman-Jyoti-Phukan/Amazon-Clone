import { NavLink } from "react-router-dom";
import Slider from "./Slider";

function HorizontalSliderComponent() {
  return (
    <>
      <div className="bg-cardBg pb-2 px-6 mb-10">
        <div className="flex items-center gap-x-5">
          <h2 className="text-fontSizeHeader">Today's Deal</h2>
          <NavLink to="/products/search?category=mobile">See All Deals</NavLink>
        </div>
        <Slider />
      </div>
    </>
  );
}

export default HorizontalSliderComponent;
