import prisma from "../config/prisma";

export const getCandidatesService = async () => {
  return prisma.candidate.findMany({
    include: {
      user: true,
    },
  });
};

export const getCandidateByIdService = async (id: number) => {
  return prisma.candidate.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
    },
  });
};

export const createCandidateService = async (
  userId: number,
  title: string,
  location: string,
  experienceYears: number,
  skills: string,
  bio?: string
) => {
  return prisma.candidate.create({
    data: {
      userId,
      title,
      location,
      experienceYears,
      skills,
      bio,
    },
    include: {
      user: true,
    },
  });
};

export const updateCandidateService = async (
  id: number,
  title: string,
  location: string,
  experienceYears: number,
  skills: string,
  bio?: string
) => {
  return prisma.candidate.update({
    where: {
      id,
    },
    data: {
      title,
      location,
      experienceYears,
      skills,
      bio,
    },
    include: {
      user: true,
    },
  });
};
export const deleteCandidateService = async (id: number) => {
  return prisma.candidate.delete({
    where: {
      id,
    },
  });
};