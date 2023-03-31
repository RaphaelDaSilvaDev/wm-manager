import { Request, Response } from "express";
import { container } from "tsyringe";
import { ConfirmPaymentUseCase } from "./ConfirmPaymentUseCase";
import { CreatePaymentUseCase } from "../CreatePayment/CreatePaymentUseCase";

export class ConfirmPaymentController {
  async handle(request: Request, response: Response) {
    const { pix } = request.body;
    const confirmPaymentUseCase = container.resolve(ConfirmPaymentUseCase);

    pix.map(async (item: any) => {
      const payment = await confirmPaymentUseCase.execute(item);

      const createPaymentUseCase = container.resolve(CreatePaymentUseCase);

      await createPaymentUseCase.execute({
        clientId: payment.clientId,
        plansId: payment.plansId,
        date: payment.dueDate
      });
    });

    response.status(200).send();
  }
}
