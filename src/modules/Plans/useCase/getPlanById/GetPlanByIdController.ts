import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetPlanByIdUseCase } from "./GetPlanByIdUseCase";

export class GetPlanByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getPlanByIdUseCase = container.resolve(GetPlanByIdUseCase);
    const plan = await getPlanByIdUseCase.execute(id);

    return response.json(plan);
  }
}
