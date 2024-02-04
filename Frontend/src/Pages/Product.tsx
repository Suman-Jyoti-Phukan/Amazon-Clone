import { useEffect } from "react";
import ProductCart from "./ProductCart";
import ProductDetail from "../Components/Product/ProductDetail";
import ProductImage from "../Components/Product/ProductImage";

function Product() {
  useEffect(() => {
    const header = document.querySelector("header")! as HTMLHeadElement;

    header.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <main>
      <section>
        <div className="grid grid-cols-[40fr,40fr,20fr] bg-white pt-8 pb-4">
          <ProductImage />
          <ProductDetail />
          <div>
            <ProductCart />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Product;
