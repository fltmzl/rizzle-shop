import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const HASH_SALT = parseInt(process.env.HASH_SALT);

  try {
    const { username, email, password } = req.body;

    let encryptedPassword = await bcrypt.hash(password, HASH_SALT);
    if (!password) {
      encryptedPassword = undefined;
    }

    const newUser = new UserModel({
      username,
      email,
      password: encryptedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json({
      code: 201,
      message: "Register successfull",
      user: savedUser,
    });
  } catch (error) {
    res.status(400).json({
      error: error.errors ?? error,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });
    if (!user) throw new Error("Login Failed: Your username or password is incorrect");

    const isPasswordVerified = await bcrypt.compare(password, user.password);
    if (!isPasswordVerified) throw new Error("Login Failed: Your username or password is incorrect");

    // sign jwt token
    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    };
    const SECRET_KEY = process.env.SECRET_KEY;
    const accessToken = jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });

    // set cookies
    res.cookie("token", accessToken, { maxAge: 900000, httpOnly: true });

    res.status(200).json({
      message: "Login successfull",
      user: {
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    res.status(401).json({
      error: {
        message: error.message,
        code: 401,
        text: "Unauthorized",
      },
    });
  }
};

export const logoutUser = async (req, res) => {
  res.clearCookie("token");
  res.end();
};
