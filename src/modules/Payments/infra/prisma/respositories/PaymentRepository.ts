import prismaClient from "../../../../../shared/infra/prisma/prismaClient";
import { ICreatePayment } from "../../../interfaces/ICreatePayment";
import { IPaymentRepository } from "../../../repositories/IPaymentRepository";
import { Payment } from "../entities/Payment";

export class PaymentRepository implements IPaymentRepository {
  async create(data: ICreatePayment): Promise<Payment> {
    const payment = await prismaClient.payments.create({
      data: data
    });

    return payment;
  }

  async getPaymentById(id: string): Promise<Payment | null> {
    const payment = await prismaClient.payments.findUnique({
      where: { id },
      include: { Client: true, Plans: true }
    });
    return payment;
  }
}
