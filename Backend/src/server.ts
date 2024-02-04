import mongoose, { connect } from "mongoose";

import dotenv from "dotenv";
import app from "./app";

dotenv.config({ path: "./config.env" });

const connectMongooseCluster = async () => {
  try {
    const response = await connect(
      `mongodb+srv://sumanjyoti:${process.env.PASSWORD}@cluster1.mhpglyj.mongodb.net/?retryWrites=true&w=majority`
    );
    if (response) {
      console.log("Successfully Connected To Mongoose Cluster");
    }
  } catch (err) {
    console.log(`Error Connecting To Mongoose : ${err}`);
  }
};

connectMongooseCluster();

const server = app.listen(process.env.PORT, () =>
  console.log(`Server Listening At : ${process.env.PORT}`)
);
