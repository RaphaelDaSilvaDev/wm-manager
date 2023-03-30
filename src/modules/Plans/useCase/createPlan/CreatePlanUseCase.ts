import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreatePlan } from "../../interfaces/ICreatePlan";
import { IPlansRepository } from "../../repositories/IPlansRepository";

@injectable()
export class CreatePlanUseCase {
  constructor(
    @inject("PlansRepository")
    private plansRepository: IPlansRepository
  ) {}

  async execute(data: ICreatePlan) {
    const verifyPlanExists = await this.plansRepository.findByName(data.name);

    if (verifyPlanExists) {
      throw new AppError("This plan alreary exists!");
    }

    const plan = await this.plansRepository.create(data);

    return plan;
  }
}
