import Carousel from "../Components/UI/Carousel";
import CardMain from "../Components/UI/CardMain";
import SliderComponent from "../Components/UI/SliderComponent";
import HorizontalSliderComponent from "../Components/UI/HorizontalSliderComponent";
import Banner from "../Components/UI/Banner";

function Homepage() {
  return (
    <section className="px-5 relative">
      <Carousel />

      <CardMain />

      <HorizontalSliderComponent />

      <SliderComponent />

      <Banner />
    </section>
  );
}

export default Homepage;
