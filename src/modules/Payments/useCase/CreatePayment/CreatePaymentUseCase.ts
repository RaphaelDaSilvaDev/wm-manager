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

    const dueDate = data.date
      ? addDays(new Date(data.date), Number(plan.dueDays))
      : addDays(new Date(), Number(plan.dueDays));

    const payload: ICreatePayment = {
      ...data,
      dueDate
    };

    const payment = await this.paymentRepository.create(payload);

    return payment;
  }
}
