import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IClientRepository } from "../../repositories/IClientRepository";

interface IResponse {
  name: string;
  clientCode: string;
  avatar: string | null;
  paymentValue: number;
  paymentDate: Date;
}

@injectable()
export class GetClientUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}

  async execute(clientCode: string) {
    const client = await this.clientRepository.getClientBySubdomain(clientCode);

    if (!client) {
      throw new AppError("Cliente não encontrado");
    }

    return client;
  }
}
