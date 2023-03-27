import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUseController {
  async handle(request: Request, response: Response) {
    const { name, username, password, permission, avatar } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute({ name, password, permission, username, avatar });

    return response.json(user);
  }
}
