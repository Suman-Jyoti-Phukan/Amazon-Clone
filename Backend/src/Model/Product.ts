import mongoose, { Model, Schema } from "mongoose";

interface productDetailLaptop {
  graphicsCard?: string;
  cpuModel?: string;
}

interface productDetail {
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

export interface IProduct {
  productTitle: string;
  product: string;
  price: number;
  discount?: number;
  image?: string;
  productDetail: productClothing &
    productDetail &
    productDetailWatch &
    productDetailLaptop;
  productDesc: Array<string>;
  category: string;
}

type ProductModel = Model<IProduct, {}>;

const productSchema: Schema<IProduct, ProductModel> = new mongoose.Schema({
  productTitle: {
    type: String,
    required: [true, "A product must have a name"],
    maxLenght: [100, "Product name should not excides 100ch"],
    minLength: [10, "Product name must have atleast 10ch"],
    trim: true,
    unique: true,
  },
  product: {
    type: String,
    required: [true, "A product must have a name"],
    trim: true,
  },

  price: {
    type: Number,
    required: [true, "A product must have a price"],
    max: [10000000, "Product price must not excide 1cr"],
  },
  discount: {
    type: Number,
  },
  image: String,

  productDetail: {
    //For Mobile
    Brand: String,
    modelName: String,
    OS: String,
    cellularTechnology: String,
    memoryStorage: String,
    RAM: String,

    // For Watch
    caseDiameter: String,
    brandColor: String,
    brandMaterialType: String,
    warrantytype: String,

    //Clothing
    size: String,

    //Laptop
    graphicsCard: String,
    cpuModel: String,
  },
  productDesc: {
    type: [String],
    trim: true,
  },

  category: {
    type: String,
    required: [true, "A product must have a category"],
    enum: ["mobile", "clothing", "jwellery", "watch", "laptop"],
  },
});

const Product = mongoose.model<IProduct, ProductModel>(
  "Product",
  productSchema
);

export default Product;

/*{
    "productTitle" : "SKMEI Men Watch Dual-Display Electronic Watch with Luminous 50m Waterproof Watch Fashion Mutifunctional Sports Watch for Men- 2100",
    "image"  : "https://m.media-amazon.com/images/I/716YlNS0NqL._SX679_.jpg",
    "category"  : "watch",
    "product" : "SKMEI Men Watch Dual-Display Electronic Watch",
    "price" : 9999,
    "productDetail" : {
        "caseDiameter" : "44.3 Millimetres",
        "brandColor" : "Yellow",
        "brandMateriyalType" : "Silicone",
        "warrantytype" : "Manufacturer"
    },
    "productDesc" : ["","",""]


} */
