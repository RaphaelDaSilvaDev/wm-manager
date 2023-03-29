import { inject, injectable } from "tsyringe";
import { IStorageProvider } from "../../../../shared/containers/providers/StorageProvider/IStorageProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { IEditClient } from "../../interfaces/IEditClient";
import { IClientRepository } from "../../repositories/IClientRepository";

@injectable()
export class EditClientUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  async execute(data: IEditClient, id: string) {
    const client = await this.clientRepository.findById(id);

    if (!client) {
      throw new AppError("Client not Found!");
    }

    if (client.avatar) {
      await this.storageProvider.delete(client.avatar, "avatar");
    }

    const fileName = await this.storageProvider.save(data.avatar, "avatar");

    const diskStorage = {
      local: process.env.APP_URL,
      s3: process.env.AWS_BUCKET_URL
    };

    //@ts-ignore
    data.avatar_url = `${diskStorage[process.env.disk]}/avatar/${fileName}`;

    const updatedClient = await this.clientRepository.editClient(data, id);
    return updatedClient;
  }
}
