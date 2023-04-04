import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IClientRepository } from "../../repositories/IClientRepository";
import { instanceToInstance } from "class-transformer";
import { IPaymentRepository } from "../../../Payments/repositories/IPaymentRepository";
import { addDays, differenceInMilliseconds } from "date-fns";
@injectable()
export class GetClientUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository,
    @inject("PaymentRepository")
    private paymentRepository: IPaymentRepository
  ) {}

  async execute(clientCode: string) {
    const client = await this.clientRepository.getClientBySubdomain(clientCode);

    if (!client) {
      throw new AppError("Cliente não encontrado!");
    }

    if (!client.id) {
      throw new AppError("Cliente sem ID!");
    }

    const payments = await this.paymentRepository.listAllPaymentsByClient(client.id);

    payments.map((payment) => {
      if (payment.status === "unpaid") {
        const validateDate = addDays(payment.dueDate, 5);
        const verifyDates = differenceInMilliseconds(validateDate, new Date());

        if (verifyDates <= 0) {
          throw new AppError("Sem acesso devido a falta de pagamento!");
        }
      }
    });

    return client;
  }
}
