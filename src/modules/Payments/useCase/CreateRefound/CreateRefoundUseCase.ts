import { inject, injectable } from "tsyringe";
import { IRefoundPayment } from "../../interfaces/IRefoundPayment";
import { IPaymentRepository } from "../../repositories/IPaymentRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { CreateRefound } from "../../../../utils/CreateRefound";

@injectable()
export class CreateRefoundUseCase {
  constructor(
    @inject("PaymentRepository")
    private paymentRepository: IPaymentRepository
  ) {}

  async execute({ paymentId, value }: IRefoundPayment) {
    const payment = await this.paymentRepository.getPaymentById(paymentId);

    if (!payment) {
      throw new AppError("Payment not found!");
    }

    if (
      payment.status !== "paid" ||
      !payment.paymentE2EId ||
      !payment.paymentTxId ||
      !payment.paymentQRCodePrice
    ) {
      throw new AppError("Payment not yet made!");
    }

    if (value && value > payment.paymentQRCodePrice) {
      throw new AppError("Payment amount greater than amount paid!");
    }
    const refoundValue = value ? value : payment.paymentQRCodePrice;

    await CreateRefound({
      e2eId: payment.paymentE2EId,
      id: payment.paymentTxId,
      value: refoundValue
    });

    payment.status = "refunded";

    await this.paymentRepository.update(payment);

    return {
      client: payment.clientId,
      payment: payment.id,
      price: refoundValue
    };
  }
}
