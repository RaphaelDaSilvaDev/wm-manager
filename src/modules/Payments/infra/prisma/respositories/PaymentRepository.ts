import { Payments } from "@prisma/client";
import prismaClient from "../../../../../shared/infra/prisma/prismaClient";
import { IAddPixToPayment } from "../../../interfaces/IAddPixToPayment";
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

  async addPixToPayment(data: IAddPixToPayment, id: string): Promise<Payments> {
    const payment = await prismaClient.payments.update({ where: { id }, data: data });
    return payment;
  }

  async findPaymentByTXid(txid: string): Promise<Payment | null> {
    const payment = await prismaClient.payments.findFirst({ where: { paymentTxId: txid } });
    return payment;
  }

  async update({ status, paymentE2EId, paymentDate, id }: Payment): Promise<Payment> {
    const payment = await prismaClient.payments.update({
      where: { id },
      data: { status, paymentE2EId, paymentDate }
    });
    return payment;
  }

  async listAllPaymentsByClient(clientId: string): Promise<Payment[]> {
    const payments = await prismaClient.payments.findMany({
      where: { clientId },
      include: { Plans: true, Client: true },
      orderBy: { dueDate: "desc" }
    });
    return payments;
  }
}
