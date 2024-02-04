import express from "express";
import {
  deleteCart,
  isAuthenticated,
  login,
  signup,
  updateCart,
} from "../Controller/authController";
import { getAllUser, getUser } from "../Controller/userController";

export const router = express.Router();

router.route("/isauthenticated").post(isAuthenticated);

router.route("/signup").post(signup);

router.route("/login").post(login);

router.route("/").get(getAllUser);

router.route("/:id").get(getUser);

router.route("/update-cart").patch(updateCart);

router.route("/delete-cart").delete(deleteCart);
