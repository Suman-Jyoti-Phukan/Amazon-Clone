import { NextFunction } from "express";
import bycrpt from "bcryptjs";
import mongoose, { Schema, Model } from "mongoose";
import { IProduct } from "./Product";

interface IUser {
  name: string;
  email: string;
  password: string;
  passwordConfirm?: string;
  createdAt: Date;
  role: string;
  photo: string;
  passwordChangedAt: Date;
  userCart: Array<mongoose.Schema.Types.ObjectId>;
}

interface IUserMethods {
  comparePassword(
    candidatePassword: string,
    userPassword: string
  ): Promise<boolean>;
}

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema: Schema<IUser, UserModel, IUserMethods> = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxLength: [50, "User name cannot excide 50ch"],
    minLength: [5, "User name cannot be less than 5ch"],
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    select: false,
    required: true,
  },

  passwordConfirm: {
    type: String,
    validate: {
      validator: function (this: IUser, value: string) {
        return value === this.password;
      },
      message: "Please Confirm Your Password",
    },
    required: true,
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },

  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },

  photo: String,

  passwordChangedAt: Date,

  userCart: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
  ],
});

userSchema.pre(/^find/, function (next: NextFunction) {
  this.populate({ path: "userCart" });
  next();
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();

  this.password = await bycrpt.hash(this.password, 12);

  this.passwordConfirm = undefined;

  next();
});

userSchema.methods.comparePassword = async (
  candidatePassword: string,
  userPassword: string
): Promise<boolean> => {
  console.log(await bycrpt.compare(candidatePassword, userPassword));
  return await bycrpt.compare(candidatePassword, userPassword);
};

const User = mongoose.model<IUser, UserModel>("User", userSchema);

export default User;
