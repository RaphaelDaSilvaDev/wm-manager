import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePlanUseCase } from "./CreatePlanUseCase";

export class CreatePlanController {
  async handle(request: Request, response: Response) {
    const { name, description, itens, dueDays, value } = request.body;

    const createPlanUseCase = container.resolve(CreatePlanUseCase);

    const plan = await createPlanUseCase.execute({ name, description, itens, dueDays, value });

    return response.json(plan);
  }
}
