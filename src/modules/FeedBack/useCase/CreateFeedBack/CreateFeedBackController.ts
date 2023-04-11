import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateFeedBackUseCase } from "./CreateFeedBackUseCase";

export class CreateFeedBackController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, feedBackText } = request.body;

    const createFeedBackUseCase = container.resolve(CreateFeedBackUseCase);
    const feedBack = await createFeedBackUseCase.execute({ clientId: id, feedBackText, title });
    return response.json(feedBack);
  }
}
