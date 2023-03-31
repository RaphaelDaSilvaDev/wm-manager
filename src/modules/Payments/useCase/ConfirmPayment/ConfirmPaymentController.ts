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
      console.log(payment);

      const createPaymentUseCase = container.resolve(CreatePaymentUseCase);

      const newPayment = await createPaymentUseCase.execute({
        clientId: payment.clientId,
        plansId: payment.plansId,
        date: payment.dueDate
      });

      console.log(newPayment);
    });

    response.status(200).send();
  }
}
