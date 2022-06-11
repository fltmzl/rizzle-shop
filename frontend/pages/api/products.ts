// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "@typings";

type Data = Product[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const products = [
    {
      name: "Nike Slim Shirt",
      slug: "nike-slim-shirt",
      category: "Shirt",
      image: "/image/p1.jpg",
      price: 200000,
      stock: 50,
      brand: "Nike",
      rating: 4,
      numReviews: 10,
      description: "High quality product",
    },
    {
      name: "Nike Slim Shirt",
      slug: "nike-slim-shirt",
      category: "Shirt",
      image: "/image/p1.jpg",
      price: 200000,
      stock: 50,
      brand: "Nike",
      rating: 4,
      numReviews: 10,
      description: "High quality product",
    },
    {
      name: "Nike Slim Shirt",
      slug: "nike-slim-shirt",
      category: "Shirt",
      image: "/image/p1.jpg",
      price: 200000,
      stock: 50,
      brand: "Nike",
      rating: 4,
      numReviews: 10,
      description: "High quality product",
    },
    {
      name: "Nike Slim Shirt",
      slug: "nike-slim-shirt",
      category: "Shirt",
      image: "/image/p1.jpg",
      price: 200000,
      stock: 50,
      brand: "Nike",
      rating: 4,
      numReviews: 10,
      description: "High quality product",
    },
  ];

  res.status(200).json(products);
}
