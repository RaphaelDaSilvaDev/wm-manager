import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../../../../modules/users/infra/prisma/repositories/UserRepository";
import { AppError } from "../../../errors/AppError";

export async function ensureMasterPermission(request: Request, response: Response, next: NextFunction) {
  const { id } = request.user;

  const userRepository = new UserRepository();

  const user = await userRepository.findById(id);

  if (user?.permission !== "master") {
    throw new AppError("User isn't master!");
  }

  return next();
}
