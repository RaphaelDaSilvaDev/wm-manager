import { addSeconds } from "date-fns";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IClientRepository } from "../../../Client/repositories/IClientRepository";
import { IPlansRepository } from "../../../Plans/repositories/IPlansRepository";
import { IPaymentRepository } from "../../repositories/IPaymentRepository";
import { CreatePaymentPix } from "../CreatePaymentPix/CreatePayment";

@injectable()
export class GeneretePixPaymentUseCase {
  constructor(
    @inject("PaymentRepository")
    private paymentRepository: IPaymentRepository,
    @inject("ClientRepository")
    private clientRepository: IClientRepository,
    @inject("PlansRepository")
    private plansRepository: IPlansRepository
  ) {}

  async execute(paymentId: string) {
    const payment = await this.paymentRepository.getPaymentById(paymentId);

    if (!payment) {
      throw new AppError("Payment not found!");
    }

    const client = await this.clientRepository.findById(payment.clientId);

    if (!client) {
      throw new AppError("Client not found!");
    }

    const plan = await this.plansRepository.findById(payment.plansId);

    if (!plan) {
      throw new AppError("Plan not found!");
    }

    const expiresSeconds = 3600;

    const generatePix = await CreatePaymentPix({
      clientDocument: client.contractorDocument,
      clientName: client.name,
      price: plan.value,
      expiresSeconds
    });

    return {
      clientName: client.name,
      clientSocialName: client.socialName,
      clientDocument: client.document,
      price: plan.value,
      due: addSeconds(new Date(), expiresSeconds),
      generatePix
    };
  }
}
