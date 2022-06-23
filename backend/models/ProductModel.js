import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    categories: [
      {
        type: String,
      },
    ],
    color: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

export default Product;
