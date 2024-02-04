import { NavLink } from "react-router-dom";
import CardImage from "./CardImage";

import { ICard, IProduct } from "../../Types/ProductTypes";

function Card({ queryObj }: { queryObj: ICard }) {
  const { data, title } = queryObj;

  const productList = Array.isArray(data) ? data : [data];

  return (
    <section className="max-w-[23rem] max-h-[26rem] bg-cardBg">
      <div className="my-5 mx-5">
        <header>
          <h2 className="text-fontSizeHeader font-bold">{title}</h2>
        </header>
        <div className="grid grid-cols-2 gap-4 grid-rows-2 my-3 text-fontSizeSecondary">
          {productList.map((data: IProduct) => {
            return (
              <section key={data._id}>
                <NavLink to={`/product/${data._id}`}>
                  <CardImage
                    image={String(data.image)}
                    product={data.product}
                  />
                </NavLink>
              </section>
            );
          })}
        </div>
        <NavLink
          to={`/products/search?category=${data[0].category}`}
          className="pl-5 hover:text-textLink active:text-textActive"
        >
          See all offers
        </NavLink>
      </div>
    </section>
  );
}

export default Card;
