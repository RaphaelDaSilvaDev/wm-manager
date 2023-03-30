import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePaymentUseCase } from "./CreatePaymentUseCase";

export class CreatePaymentController {
  async handle(request: Request, response: Response) {
    const { plansId, clientId } = request.body;

    const createPaymentUseCase = container.resolve(CreatePaymentUseCase);
    const payment = await createPaymentUseCase.execute({ clientId, plansId });

    return response.json(payment);
  }
}
