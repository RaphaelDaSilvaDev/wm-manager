import { User } from "../infra/prisma/entities/User";
import { ICreateUser } from "../interfaces/ICreateUser";

export interface IUserRepository {
  create(user: ICreateUser): Promise<User>;
  update(user: ICreateUser): Promise<User>;
  findByUserName(username: string): Promise<User | null>;
  listAll(search?: string): Promise<User[]>;
  findById(id: string): Promise<User | null>;
}
