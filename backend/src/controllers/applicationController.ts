import { Request, Response } from "express";
import {
  getApplicationsService,
  createApplicationService,
  updateApplicationStatusService,
} from "../services/applicationService";

export const getApplicationsController = async (
  req: Request,
  res: Response
) => {
  try {
    const applications = await getApplicationsService();

    return res.json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);

    return res.status(500).json({
      message: "Failed to fetch applications",
    });
  }
};

export const createApplicationController = async (
  req: Request,
  res: Response
) => {
  try {
    const { candidateId, jobId } = req.body;

    if (!candidateId || !jobId) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const application = await createApplicationService(
      Number(candidateId),
      Number(jobId)
    );

    return res.status(201).json(application);
  } catch (error) {
    console.error("Error creating application:", error);

    return res.status(500).json({
      message: "Failed to create application",
    });
  }
};

export const updateApplicationStatusController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);
    const { status } = req.body;

    const allowedStatuses = ["PENDING", "ACCEPTED", "REJECTED"];

if (!allowedStatuses.includes(status)) {
  return res.status(400).json({
    message: "Invalid application status",
  });
}

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid application id",
      });
    }

    if (!status) {
      return res.status(400).json({
        message: "Status is required",
      });
    }

    const application = await updateApplicationStatusService(
      id,
      status
    );

    return res.json(application);
  } catch (error) {
    console.error("Error updating application status:", error);

    return res.status(500).json({
      message: "Failed to update application status",
    });
  }
};