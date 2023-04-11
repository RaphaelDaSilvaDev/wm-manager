import { inject, injectable } from "tsyringe";
import { ICreateFeedBack } from "../../interfaces/ICreateFeedBack";
import { IFeedBackRepositories } from "../../repositories/IFeedBackRepositories";
import { IClientRepository } from "../../../Client/repositories/IClientRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
export class CreateFeedBackUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository,
    @inject("FeedBackRepository")
    private feedBackRepository: IFeedBackRepositories
  ) {}

  async execute(data: ICreateFeedBack) {
    const getClient = await this.clientRepository.findByClientCode(data.clientId);

    if (!getClient || !getClient.id) {
      throw new AppError("Cliente não encontrado!");
    }

    data.clientId = getClient.id;

    const feedback = await this.feedBackRepository.createFeedBack(data);
    return feedback;
  }
}
