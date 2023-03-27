import { addMonths } from "date-fns";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateClient, ICreateClientPrisma } from "../../interfaces/ICreateClient";
import { IClientRepository } from "../../repositories/IClientRepository";

@injectable()
export class CreateClientUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}

  async execute(data: ICreateClient) {
    const verifyClientAlreadyExists = await this.clientRepository.findByDocument(data.document);

    if (verifyClientAlreadyExists) {
      throw new AppError("This document client already exists!");
    }

    const clientCode = "10" + Math.floor(1000 + Math.random() * 9000);

    const client: ICreateClientPrisma = {
      ...data,
      clientCode,
      paymentDate: addMonths(new Date(), 1),
      paymentValue: 50
    };

    const createdClient = await this.clientRepository.createClient(client);

    return createdClient;
  }
}
