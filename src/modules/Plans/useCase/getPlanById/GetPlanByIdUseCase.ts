import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IPlansRepository } from "../../repositories/IPlansRepository";

@injectable()
export class GetPlanByIdUseCase {
  constructor(
    @inject("PlansRepository")
    private plansRepository: IPlansRepository
  ) {}

  async execute(id: string) {
    const plan = await this.plansRepository.findById(id);

    if (!plan) {
      throw new AppError("Plan not found!");
    }

    return plan;
  }
}
