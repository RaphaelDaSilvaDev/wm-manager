import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IPaymentRepository } from "../../repositories/IPaymentRepository";

@injectable()
export class GetPaymentByIdUseCase {
  constructor(
    @inject("PaymentRepository")
    private paymentRepository: IPaymentRepository
  ) {}

  async execute(id: string) {
    const verifyPaymentExists = await this.paymentRepository.getPaymentById(id);

    if (!verifyPaymentExists) {
      throw new AppError("Payment not found!");
    }

    return verifyPaymentExists;
  }
}
