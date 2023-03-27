import { container } from "tsyringe";
import { ClientRepository } from "../../modules/Client/infra/prisma/repositories/ClientRepository";
import { IClientRepository } from "../../modules/Client/repositories/IClientRepository";
import { UserRepository } from "../../modules/users/infra/prisma/repositories/UserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IClientRepository>("ClientRepository", ClientRepository);
