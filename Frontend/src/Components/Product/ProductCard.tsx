import { NavLink } from "react-router-dom";
import ProductDiscount from "./ProductDiscount";

interface productDetailMobile {
  Brand?: string;
  modelName?: string;
  OS?: string;
  cellularTechnology?: string;
  memoryStorage?: string;
  RAM?: string;
}

interface productDetailWatch {
  caseDiameter?: string;
  brandColor?: string;
  brandMaterialType?: string;
  warrantytype?: string;
}

interface productClothing {
  size?: string;
}

interface productDetailLaptop {
  graphicsCard?: string;
  cpuModel?: string;
}

export interface IProduct {
  productTitle: string;
  product: string;
  price: number;
  discount?: number;
  image?: string;
  productDetail: productClothing &
    productDetailMobile &
    productDetailWatch &
    productDetailLaptop;
  productDesc: Array<string>;
  category: string;
  _id?: string;
}

function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className=" max-h-[33rem] min-h-[30rem] p-4 rounded-lg overflow-hidden bg-white">
      <NavLink
        to={`/product/${product._id}`}
        className="w-full h-full block transition duration-300 ease-in-out"
      >
        <div className="h-[18rem] overflow-hidden flex justify-center">
          <img
            src={`${product.image}`}
            alt={`${product.productTitle}`}
            className="object-obtain"
          />
        </div>
        <div className="mt-4">
          <p className="font-semibold">{product.productTitle}</p>
          <div className="py-4">
            {product.discount && (
              <ProductDiscount
                productPrice={{
                  price: product.price,
                  discount: product.discount,
                }}
              />
            )}
          </div>
          <p className="text-gray-500">M.R.P: {product.price}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default ProductCard;
