import prisma from "../config/prisma";

export const getRecruitersService = async () => {
  return prisma.recruiter.findMany({
    include: {
      user: true,
    },
  });
};

export const createRecruiterService = async (
  userId: number,
  companyName: string,
  position: string
) => {
  return prisma.recruiter.create({
    data: {
      userId,
      companyName,
      position,
    },
    include: {
      user: true,
    },
  });
};

export const getRecruiterByIdService = async (id: number) => {
  return prisma.recruiter.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
    },
  });
};

export const updateRecruiterService = async (
  id: number,
  companyName: string,
  position: string
) => {
  return prisma.recruiter.update({
    where: {
      id,
    },
    data: {
      companyName,
      position,
    },
    include: {
      user: true,
    },
  });
};

export const deleteRecruiterService = async (id: number) => {
  return prisma.recruiter.delete({
    where: {
      id,
    },
  });
};