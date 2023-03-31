import { Request, Response } from "express";
import { container } from "tsyringe";
import { ConfirmPaymentUseCase } from "./ConfirmPaymentUseCase";

export class ConfirmPaymentController {
  async handle(request: Request, response: Response) {
    const { pix } = request.body;
    console.log(pix[0]);
    const confirmPaymentUseCase = container.resolve(ConfirmPaymentUseCase);

    await confirmPaymentUseCase.execute(pix[0]);

    response.status(200).send();
  }
}
