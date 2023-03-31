import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IPaymentRepository } from "../../repositories/IPaymentRepository";

@injectable()
export class ListAllPaymentUseCase {
  constructor(
    @inject("PaymentRepository")
    private paymentRepository: IPaymentRepository
  ) {}

  async execute(clientId: string) {
    const payments = await this.paymentRepository.listAllPaymentsByClient(clientId);

    return payments;
  }
}
