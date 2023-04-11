import prismaClient from "../../../../../shared/infra/prisma/prismaClient";
import { ICreateFeedBack } from "../../../interfaces/ICreateFeedBack";
import { IFeedBackRepositories } from "../../../repositories/IFeedBackRepositories";
import { FeedBack } from "../entitites/FeedBack";

export class FeedBackRepository implements IFeedBackRepositories {
  async createFeedBack(data: ICreateFeedBack): Promise<FeedBack> {
    const feedBack = await prismaClient.feedBack.create({ data });
    return feedBack;
  }
}
