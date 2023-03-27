import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IEditClient } from "../../interfaces/IEditClient";
import { IClientRepository } from "../../repositories/IClientRepository";

@injectable()
export class EditClientUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}

  async execute(data: IEditClient, id: string) {
    const client = await this.clientRepository.findById(id);

    if (!client) {
      throw new AppError("Client not Found!");
    }

    const updatedClient = await this.clientRepository.editClient(data, id);
    return updatedClient;
  }
}
