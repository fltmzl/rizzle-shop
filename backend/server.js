import express from "express";

const app = express();
const PORT = process.env.PORT || 9000;

app.get("/api/product", (req, res) => {
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

  res.status(200).send(products);
});

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});
