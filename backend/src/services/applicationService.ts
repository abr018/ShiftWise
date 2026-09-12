import prisma from "../config/prisma";


export const getApplicationsService = async () => {
  return prisma.application.findMany({
    include: {
      candidate: {
        include: {
          user: true,
        },
      },
      job: true,
    },
  });
};

export const createApplicationService = async (
  candidateId: number,
  jobId: number
) => {
  return prisma.application.create({
    data: {
      candidateId,
      jobId,
    },
    include: {
      candidate: {
        include: {
          user: true,
        },
      },
      job: true,
    },
  });
};

export const updateApplicationStatusService = async (
  id: number,
  status: string
) => {
  return prisma.application.update({
    where: {
      id,
    },
    data: {
      status,
    },
    include: {
      candidate: {
        include: {
          user: true,
        },
      },
      job: true,
    },
  });
};