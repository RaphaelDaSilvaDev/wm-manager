import { inject, injectable } from "tsyringe";
import { IPlansRepository } from "../../repositories/IPlansRepository";

@injectable()
export class ListPlansUseCase {
  constructor(
    @inject("PlansRepository")
    private plansRepository: IPlansRepository
  ) {}

  async execute() {
    const plans = await this.plansRepository.listAll();

    return plans;
  }
}
