import { container } from "tsyringe";
import { ClientRepository } from "../../modules/Client/infra/prisma/repositories/ClientRepository";
import { IClientRepository } from "../../modules/Client/repositories/IClientRepository";
import { PlansRepository } from "../../modules/Plans/infra/prisma/respositories/PlansRepository";
import { IPlansRepository } from "../../modules/Plans/repositories/IPlansRepository";
import { UserRepository } from "../../modules/users/infra/prisma/repositories/UserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";
import { LocalStorageProvider } from "./providers/StorageProvider/implementation/LocalStorageProvider";
import { S3StorageProvider } from "./providers/StorageProvider/implementation/S3StorageProvider";
import { IStorageProvider } from "./providers/StorageProvider/IStorageProvider";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IClientRepository>("ClientRepository", ClientRepository);
container.registerSingleton<IPlansRepository>("PlansRepository", PlansRepository);

const diskStorage = {
  local: LocalStorageProvider,
  s3: S3StorageProvider
};

//@ts-ignore
container.registerSingleton<IStorageProvider>("StorageProvider", diskStorage[process.env.disk]);
