import { Request, Response } from "express";
import {
  getCandidatesService,
  getCandidateByIdService,
  createCandidateService,
  updateCandidateService,
  deleteCandidateService,
} from "../services/candidateService";

export const getCandidatesController = async (
  req: Request,
  res: Response
) => {
  try {
    const candidates = await getCandidatesService();

    return res.json(candidates);
  } catch (error) {
    console.error("Error fetching candidates:", error);

    return res.status(500).json({
      message: "Failed to fetch candidates",
    });
  }
};

export const getCandidateByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid candidate id",
      });
    }

    const candidate = await getCandidateByIdService(id);

    if (!candidate) {
      return res.status(404).json({
        message: "Candidate not found",
      });
    }

    return res.json(candidate);
  } catch (error) {
    console.error("Error fetching candidate:", error);

    return res.status(500).json({
      message: "Failed to fetch candidate",
    });
  }
};

export const createCandidateController = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      userId,
      title,
      location,
      experienceYears,
      skills,
      bio,
    } = req.body;

    if (!userId || !title || !location || experienceYears === undefined || !skills) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const candidate = await createCandidateService(
      Number(userId),
      title,
      location,
      Number(experienceYears),
      skills,
      bio
    );

    return res.status(201).json(candidate);
  } catch (error) {
    console.error("Error creating candidate:", error);

    return res.status(500).json({
      message: "Failed to create candidate",
    });
  }
};

export const updateCandidateController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid candidate id",
      });
    }

    const {
      title,
      location,
      experienceYears,
      skills,
      bio,
    } = req.body;

    if (!title || !location || experienceYears === undefined || !skills) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const candidate = await updateCandidateService(
      id,
      title,
      location,
      Number(experienceYears),
      skills,
      bio
    );

    return res.json(candidate);
  } catch (error) {
    console.error("Error updating candidate:", error);

    return res.status(500).json({
      message: "Failed to update candidate",
    });
  }
};

export const deleteCandidateController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid candidate id",
      });
    }

    await deleteCandidateService(id);

    return res.json({
      message: "Candidate deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting candidate:", error);

    return res.status(500).json({
      message: "Failed to delete candidate",
    });
  }
};