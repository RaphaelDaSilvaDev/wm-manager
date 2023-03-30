import { Payment } from "../infra/prisma/entities/Payment";
import { ICreatePayment } from "../interfaces/ICreatePayment";

export interface IPaymentRepository {
  create(data: ICreatePayment): Promise<Payment>;
  getPaymentById(id: string): Promise<Payment | null>;
}
