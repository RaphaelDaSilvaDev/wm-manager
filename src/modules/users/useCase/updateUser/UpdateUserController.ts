import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.user;
    const { userId } = request.params;
    const { username, password } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    await updateUserUseCase.execute({ id: userId ? userId : id, username, password });

    return response.status(201).send();
  }
}
