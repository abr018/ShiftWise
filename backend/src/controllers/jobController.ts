import { Request, Response } from "express";
import {
  getJobsService,
  createJobService,
  getJobByIdService,
  updateJobService,
  deleteJobService,
} from "../services/jobService";

export const getJobsController = async (
  req: Request,
  res: Response
) => {
  try {
    const jobs = await getJobsService();

    return res.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);

    return res.status(500).json({
      message: "Failed to fetch jobs",
    });
  }
};

export const createJobController = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      recruiterId,
      title,
      location,
      experienceYears,
      skills,
      description,
    } = req.body;

    if (
      !recruiterId ||
      !title ||
      !location ||
      experienceYears === undefined ||
      !skills
    ) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const job = await createJobService(
      Number(recruiterId),
      title,
      location,
      Number(experienceYears),
      skills,
      description
    );

    return res.status(201).json(job);
  } catch (error) {
    console.error("Error creating job:", error);

    return res.status(500).json({
      message: "Failed to create job",
    });
  }
};

export const getJobByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid job id",
      });
    }

    const job = await getJobByIdService(id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    return res.json(job);
  } catch (error) {
    console.error("Error fetching job:", error);

    return res.status(500).json({
      message: "Failed to fetch job",
    });
  }
};

export const updateJobController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const {
      title,
      location,
      experienceYears,
      skills,
      description,
    } = req.body;

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid job id",
      });
    }

    if (
      !title ||
      !location ||
      experienceYears === undefined ||
      !skills
    ) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const job = await updateJobService(
      id,
      title,
      location,
      Number(experienceYears),
      skills,
      description
    );

    return res.json(job);
  } catch (error) {
    console.error("Error updating job:", error);

    return res.status(500).json({
      message: "Failed to update job",
    });
  }
};

export const deleteJobController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid job id",
      });
    }

    await deleteJobService(id);

    return res.json({
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting job:", error);

    return res.status(500).json({
      message: "Failed to delete job",
    });
  }
};