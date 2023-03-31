import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllPaymentUseCase } from "./ListAllPaymentsUseCase";

export class ListAllPaymentController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const listAllPaymentUseCase = container.resolve(ListAllPaymentUseCase);
    const payments = await listAllPaymentUseCase.execute(id);

    return response.json(payments);
  }
}
