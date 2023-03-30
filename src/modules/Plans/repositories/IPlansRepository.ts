import { Plans } from "../infra/prisma/entities/Plans";
import { ICreatePlan } from "../interfaces/ICreatePlan";

export interface IPlansRepository {
  findByName(name: string): Promise<Plans | null>;
  create(data: ICreatePlan): Promise<Plans>;
  findById(id: string): Promise<Plans | null>;
}
