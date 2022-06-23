import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "email required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", userSchema);

export default UserModel;
