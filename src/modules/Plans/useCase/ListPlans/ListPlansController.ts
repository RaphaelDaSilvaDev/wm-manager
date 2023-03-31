import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPlansUseCase } from "./ListPlansUseCase";

export class ListPlansController {
  async handle(request: Request, response: Response) {
    const listPlansUseCase = container.resolve(ListPlansUseCase);
    const plans = await listPlansUseCase.execute();
    return response.json(plans);
  }
}
