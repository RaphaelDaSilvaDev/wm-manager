import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetPaymentByIdUseCase } from "./GetPaymentByIdUseCase";

export class GetPaymentByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getPaymentByIdUseCase = container.resolve(GetPaymentByIdUseCase);
    const payment = await getPaymentByIdUseCase.execute(id);

    return response.json(payment);
  }
}
