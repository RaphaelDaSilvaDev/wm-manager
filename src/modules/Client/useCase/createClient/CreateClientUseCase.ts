import { container, inject, injectable } from "tsyringe";
import { IStorageProvider } from "../../../../shared/containers/providers/StorageProvider/IStorageProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateClient, ICreateClientPrisma } from "../../interfaces/ICreateClient";
import { IClientRepository } from "../../repositories/IClientRepository";
import { CreatePaymentUseCase } from "../../../Payments/useCase/CreatePayment/CreatePaymentUseCase";
import { IPlansRepository } from "../../../Plans/repositories/IPlansRepository";

@injectable()
export class CreateClientUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider,
    @inject("PlansRepository")
    private plansRepository: IPlansRepository
  ) {}

  async execute(data: ICreateClient) {
    const verifyClientAlreadyExists = await this.clientRepository.findByDocument(data.document);

    if (verifyClientAlreadyExists) {
      throw new AppError("This document client already exists!");
    }

    const clientCode = "10" + Math.floor(1000 + Math.random() * 9000);
    const verifyClientCodeAlreadyExistst = await this.clientRepository.getClientBySubdomain(clientCode);

    if (verifyClientCodeAlreadyExistst) {
      throw new AppError("This client Code already exists!");
    }

    const verifyPlanExists = await this.plansRepository.findById(data.plansId);

    if (!verifyPlanExists) {
      throw new AppError("This plan not extist!");
    }

    const client: ICreateClientPrisma = {
      ...data,
      clientCode
    };

    const fileName = await this.storageProvider.save(data.avatar, "avatar");

    const diskStorage = {
      local: process.env.APP_URL,
      s3: process.env.AWS_BUCKET_URL
    };

    //@ts-ignore
    client.avatar_url = `${diskStorage[process.env.disk]}/avatar/${fileName}`;

    const createdClient = await this.clientRepository.createClient(client);

    return createdClient;
  }
}
