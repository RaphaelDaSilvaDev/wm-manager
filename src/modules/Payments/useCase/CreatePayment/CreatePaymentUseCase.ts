import { addDays } from "date-fns";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IPlansRepository } from "../../../Plans/repositories/IPlansRepository";
import { ICreatePayment } from "../../interfaces/ICreatePayment";
import { IPaymentRepository } from "../../repositories/IPaymentRepository";

interface Request {
  plansId: string;
  clientId: string;
  date?: Date;
}

@injectable()
export class CreatePaymentUseCase {
  constructor(
    @inject("PlansRepository")
    private plansRepository: IPlansRepository,
    @inject("PaymentRepository")
    private paymentRepository: IPaymentRepository
  ) {}

  async execute(data: Request) {
    const plan = await this.plansRepository.findById(data.plansId);

    if (!plan) {
      throw new AppError("Plan not Found!");
    }

    let dueDate;
    if (data.date) {
      dueDate = addDays(data.date, Number(plan.dueDays));
    } else {
      dueDate = addDays(new Date(), Number(plan.dueDays));
    }

    const payload: ICreatePayment = {
      clientId: data.clientId,
      plansId: data.plansId,
      dueDate,
      status: "unpaid"
    };

    const payment = await this.paymentRepository.create(payload);

    return payment;
  }
}
