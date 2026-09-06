import { Request, Response } from "express";
import {
  getUsersService,
  createUserService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
} from "../services/userService";

export const getUsersController = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await getUsersService();

    return res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);

    return res.status(500).json({
      message: "Failed to fetch users",
    });
  }
};

export const createUserController = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      email,
      role,
    } = req.body;

    if (!name || !email || !role) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const user = await createUserService(
      name,
      email,
      role
    );

    return res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);

    return res.status(500).json({
      message: "Failed to create user",
    });
  }
};

export const getUserByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid user id",
      });
    }

    const user = await getUserByIdService(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);

    return res.status(500).json({
      message: "Failed to fetch user",
    });
  }
};

export const updateUserController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);
    const { name, email, role } = req.body;

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid user id",
      });
    }

    if (!name || !email || !role) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const user = await updateUserService(
      id,
      name,
      email,
      role
    );

    return res.json(user);
  } catch (error) {
    console.error("Error updating user:", error);

    return res.status(500).json({
      message: "Failed to update user",
    });
  }
};

export const deleteUserController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid user id",
      });
    }

    await deleteUserService(id);

    return res.json({
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user:", error);

    return res.status(500).json({
      message: "Failed to delete user",
    });
  }
};