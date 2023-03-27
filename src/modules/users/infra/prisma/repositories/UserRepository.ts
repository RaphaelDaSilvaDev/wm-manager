import prismaClient from "../../../../../shared/infra/prisma/prismaClient";
import { ICreateUser } from "../../../interfaces/ICreateUser";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { User } from "../entities/User";

export class UserRepository implements IUserRepository {
  async create({ name, password, permission, username, avatar, id, status }: ICreateUser): Promise<User> {
    const user = await prismaClient.user.create({
      data: {
        avatar,
        name,
        password,
        permission,
        username,
        id,
        status
      }
    });

    return user;
  }

  async update({ name, password, permission, username, avatar, id, status }: ICreateUser): Promise<User> {
    const user = await prismaClient.user.update({
      where: { id },
      data: { avatar, name, password, permission, status, username }
    });
    return user;
  }

  async findByUserName(username: string): Promise<User | null> {
    return await prismaClient.user.findFirst({ where: { username } });
  }

  async listAll(search?: string): Promise<User[]> {
    const users = await prismaClient.user.findMany({
      orderBy: { status: "desc" },
      where: {
        OR: [
          { name: { contains: search ? search : "", mode: "insensitive" } },
          { username: { contains: search ? search : "", mode: "insensitive" } }
        ]
      }
    });

    return users;
  }

  async findById(id: string): Promise<User | null> {
    return await prismaClient.user.findUnique({ where: { id } });
  }
}
