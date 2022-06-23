import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ a: "test" });
});

export default router;
