import { Request, Response } from "express";
import { container } from "tsyringe";
import { ConfirmPaymentUseCase } from "./ConfirmPaymentUseCase";

export class ConfirmPaymentController {
  async handle(request: Request, response: Response) {
    const { pix } = request.body;
    const confirmPaymentUseCase = container.resolve(ConfirmPaymentUseCase);

    pix.map(async (item: any) => await confirmPaymentUseCase.execute(item));

    response.status(200).send();
  }
}
