import { Payments } from "@prisma/client";
import { Payment } from "../infra/prisma/entities/Payment";
import { IAddPixToPayment } from "../interfaces/IAddPixToPayment";
import { ICreatePayment } from "../interfaces/ICreatePayment";

export interface IPaymentRepository {
  create(data: ICreatePayment): Promise<Payment>;
  getPaymentById(id: string): Promise<Payment | null>;
  addPixToPayment(data: IAddPixToPayment, id: string): Promise<Payments>;
}
