import prismaClient from "../../../../../shared/infra/prisma/prismaClient";
import { ICreatePlan } from "../../../interfaces/ICreatePlan";
import { IPlansRepository } from "../../../repositories/IPlansRepository";
import { Plans } from "../entities/Plans";

export class PlansRepository implements IPlansRepository {
  async findByName(name: string): Promise<Plans | null> {
    const plan = await prismaClient.plans.findFirst({ where: { name } });
    return plan;
  }

  async create(data: ICreatePlan): Promise<Plans> {
    const plan = await prismaClient.plans.create({
      data: data
    });

    return plan;
  }

  async findById(id: string): Promise<Plans | null> {
    const plan = await prismaClient.plans.findUnique({ where: { id } });
    return plan;
  }
}
