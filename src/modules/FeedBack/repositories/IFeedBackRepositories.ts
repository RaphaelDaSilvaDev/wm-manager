import { FeedBack } from "../infra/prisma/entitites/FeedBack";
import { ICreateFeedBack } from "../interfaces/ICreateFeedBack";

export interface IFeedBackRepositories {
  createFeedBack(data: ICreateFeedBack): Promise<FeedBack>;
}
