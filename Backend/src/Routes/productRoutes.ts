import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} from "../Controller/productController";

export const router = express.Router();

router
  .route("/:productId")
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

router.route("/").get(getAllProduct).post(createProduct);
