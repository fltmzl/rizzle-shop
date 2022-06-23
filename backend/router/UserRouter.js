import express from "express";
import bcrypt from "bcrypt";
import { verifyTokenAndAuthorize } from "../middleware/auth.js";
import UserModel from "../models/UserModel.js";

const router = express.Router();

router.put("/:id", verifyTokenAndAuthorize, async (req, res) => {
  const HASH_SALT = parseInt(process.env.HASH_SALT);
  try {
    const { password } = req.body;
    const { username, email } = req.user;

    const encryptedPassword = await bcrypt.hash(password, HASH_SALT);

    // const newUser = new UserModel({
    //   username,
    //   email,
    //   password: encryptedPassword,
    // });

    // const savedUser = await newUser.save();
    // res.status(200).json({
    //   code: 200,
    //   message: "Change password success",
    //   user: savedUser,
    // });
  } catch (error) {
    res.status(400).json({
      error: error.errors ?? error,
    });
  }
});

export default router;
