import { Request, Response } from "express";
import {
  registerUserService,
  loginUserService,
} from "../services/authService";

export const registerController = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    if (role !== "CANDIDATE" && role !== "RECRUITER") {
      return res.status(400).json({
        message: "Invalid role",
      });
    }

    const user = await registerUserService(
      name,
      email,
      password,
      role
    );

    return res.status(201).json(user);
  } catch (error: any) {
    console.error("Error registering user:", error);

    if (error.message === "EMAIL_ALREADY_EXISTS") {
      return res.status(409).json({
        message: "Email already exists",
      });
    }

    return res.status(500).json({
      message: "Failed to register user",
    });
  }
};

export const loginController = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await loginUserService(email, password);

    return res.json(user);
  } catch (error: any) {
    console.error("Error logging in:", error);

    if (error.message === "INVALID_CREDENTIALS") {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    return res.status(500).json({
      message: "Failed to login",
    });
  }
};