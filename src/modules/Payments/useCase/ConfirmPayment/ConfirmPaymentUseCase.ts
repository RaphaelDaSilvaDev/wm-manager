import { container, inject, injectable } from "tsyringe";
import { IConfirmPayment } from "../../interfaces/IConfirmPayment";
import { IPaymentRepository } from "../../repositories/IPaymentRepository";
import { AppError } from "../../../../shared/errors/AppError";

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

    if (!data.devolucoes) {
      payment.status = "paid";
      payment.paymentE2EId = data.endToEndId;
      payment.paymentDate = new Date(data.horario);
    } else {
      if (data.devolucoes.status === "EM_PROCESSAMENTO") {
        payment.status = "pending_refund";
      } else if (data.devolucoes.status === "DEVOLVIDO") {
        payment.status = "refunded";
      }
    }

    const updatedPayment = await this.paymentRepository.update(payment);

    return updatedPayment;
  }
}
