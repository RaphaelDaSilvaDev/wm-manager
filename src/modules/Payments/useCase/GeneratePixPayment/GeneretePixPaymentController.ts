import { Request, Response } from "express";
import { container } from "tsyringe";
import { GeneretePixPaymentUseCase } from "./GeneretePixPaymentUseCase";

export class GeneretePixPaymentController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const generetePixPaymentUseCase = container.resolve(GeneretePixPaymentUseCase);
    const pixPayment = await generetePixPaymentUseCase.execute(id);

    return response.json(pixPayment);
  }
}
