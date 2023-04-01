import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IPaymentRepository } from "../../repositories/IPaymentRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
export class ListAllPaymentUseCase {
  constructor(
    @inject("PaymentRepository")
    private paymentRepository: IPaymentRepository
  ) {}

  async execute(clientId: string) {
    const payments = await this.paymentRepository.listAllPaymentsByClient(clientId);

    if (!payments) {
      throw new AppError("Payment not found!");
    }

    return payments;
  }
}
