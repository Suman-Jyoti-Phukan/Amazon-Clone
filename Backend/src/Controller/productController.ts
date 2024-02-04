import Product from "../Model/Product";
import { Request, Response, NextFunction } from "express";

import { catchAsync } from "../Utils/catchAsync";
import APIFeatures from "../Utils/apiFeatures";

export const createProduct = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const product = await Product.create(req.body);

    res.status(201).json({
      status: "Successfully created!",
      data: {
        product,
      },
    });
  }
);

export const getAllProduct = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const productQuery = Product.find();

    const features = new APIFeatures(productQuery, req.query)
      .filter()
      .sort()
      .limitField()
      .paginate();

    const products = await features.query;

    res.status(200).json({
      status: "success",
      totalProduct: products.length,
      productsData: {
        products,
      },
    });
  }
);

export const getProduct = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const products = await Product.findById(req.params.productId);

    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  }
);

export const updateProduct = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const products = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  }
);

// Not for deleting items in child referencing in USER cart
export const deleteProduct = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await Product.findByIdAndDelete(req.params.productId);

    res.status(204).json({
      status: "success",
    });
  }
);
