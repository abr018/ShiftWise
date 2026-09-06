import prisma from "../config/prisma";

export const getJobsService = async () => {
  return prisma.job.findMany({
    include: {
      recruiter: {
        include: {
          user: true,
        },
      },
    },
  });
};

export const createJobService = async (
  recruiterId: number,
  title: string,
  location: string,
  experienceYears: number,
  skills: string,
  description?: string
) => {
  return prisma.job.create({
    data: {
      recruiterId,
      title,
      location,
      experienceYears,
      skills,
      description,
    },
    include: {
      recruiter: {
        include: {
          user: true,
        },
      },
    },
  });
};

export const getJobByIdService = async (id: number) => {
  return prisma.job.findUnique({
    where: {
      id,
    },
    include: {
      recruiter: {
        include: {
          user: true,
        },
      },
    },
  });
};

export const updateJobService = async (
  id: number,
  title: string,
  location: string,
  experienceYears: number,
  skills: string,
  description?: string
) => {
  return prisma.job.update({
    where: {
      id,
    },
    data: {
      title,
      location,
      experienceYears,
      skills,
      description,
    },
    include: {
      recruiter: {
        include: {
          user: true,
        },
      },
    },
  });
};

export const deleteJobService = async (id: number) => {
  return prisma.job.delete({
    where: {
      id,
    },
  });
};