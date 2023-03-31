import { container, inject, injectable } from "tsyringe";
import { IConfirmPayment } from "../../interfaces/IConfirmPayment";
import { IPaymentRepository } from "../../repositories/IPaymentRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { CreatePaymentUseCase } from "../CreatePayment/CreatePaymentUseCase";

@injectable()
export class ConfirmPaymentUseCase {
  constructor(
    @inject("PaymentRepository")
    private paymentRepository: IPaymentRepository
  ) {}

  async execute(data: IConfirmPayment) {
    const payment = await this.paymentRepository.findPaymentByTXid(data.txid);

    if (!payment) {
      throw new AppError("Payment not found!");
    }

    payment.status = "paid";
    payment.paymentE2EId = data.endToEndId;
    payment.paymentDate = new Date(data.horario);

    await this.paymentRepository.update(payment);

    const createPaymentUseCase = container.resolve(CreatePaymentUseCase);

    await createPaymentUseCase.execute({
      clientId: payment.clientId,
      plansId: payment.plansId,
      date: payment.dueDate
    });

    return;
  }
}
