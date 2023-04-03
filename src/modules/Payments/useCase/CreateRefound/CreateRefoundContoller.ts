import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRefoundUseCase } from "./CreateRefoundUseCase";

export class CreateRefoundController {
  async handle(request: Request, response: Response) {
    const { value } = request.body;
    const { id } = request.params;

    const createRefoundUseCase = container.resolve(CreateRefoundUseCase);

    const refound = await createRefoundUseCase.execute({ paymentId: id, value });

    return response.json(refound);
  }
}
