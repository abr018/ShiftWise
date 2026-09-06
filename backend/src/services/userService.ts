import prisma from "../config/prisma";
import { UserRole } from "@prisma/client";

export const getUsersService = async () => {
  return prisma.user.findMany();
};

export const createUserService = async (
  name: string,
  email: string,
  role: UserRole
) => {
  return prisma.user.create({
    data: {
      name,
      email,
      role,
    },
  });
};

export const getUserByIdService = async (id: number) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};

export const updateUserService = async (
  id: number,
  name: string,
  email: string,
  role: UserRole
) => {
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      role,
    },
  });
};

export const deleteUserService = async (id: number) => {
  return prisma.user.delete({
    where: {
      id,
    },
  });
};