import { Request, Response } from "express";
import {
  getRecruitersService,
  createRecruiterService,
  getRecruiterByIdService,
  updateRecruiterService,
  deleteRecruiterService,
} from "../services/recruiterService";

export const getRecruitersController = async (
  req: Request,
  res: Response
) => {
  try {
    const recruiters = await getRecruitersService();

    return res.json(recruiters);
  } catch (error) {
    console.error("Error fetching recruiters:", error);

    return res.status(500).json({
      message: "Failed to fetch recruiters",
    });
  }
};

export const createRecruiterController = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      userId,
      companyName,
      position,
    } = req.body;

    if (!userId || !companyName || !position) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const recruiter = await createRecruiterService(
      Number(userId),
      companyName,
      position
    );

    return res.status(201).json(recruiter);
  } catch (error) {
    console.error("Error creating recruiter:", error);

    return res.status(500).json({
      message: "Failed to create recruiter",
    });
  }
};

export const getRecruiterByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid recruiter id",
      });
    }

    const recruiter = await getRecruiterByIdService(id);

    if (!recruiter) {
      return res.status(404).json({
        message: "Recruiter not found",
      });
    }

    return res.json(recruiter);
  } catch (error) {
    console.error("Error fetching recruiter:", error);

    return res.status(500).json({
      message: "Failed to fetch recruiter",
    });
  }
};

export const updateRecruiterController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);
    const { companyName, position } = req.body;

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid recruiter id",
      });
    }

    if (!companyName || !position) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const recruiter = await updateRecruiterService(
      id,
      companyName,
      position
    );

    return res.json(recruiter);
  } catch (error) {
    console.error("Error updating recruiter:", error);

    return res.status(500).json({
      message: "Failed to update recruiter",
    });
  }
};

export const deleteRecruiterController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid recruiter id",
      });
    }

    await deleteRecruiterService(id);

    return res.json({
      message: "Recruiter deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting recruiter:", error);

    return res.status(500).json({
      message: "Failed to delete recruiter",
    });
  }
};