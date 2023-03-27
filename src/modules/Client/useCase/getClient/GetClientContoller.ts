import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetClientUseCase } from "./GetClientUseCase";

export class GetClientController {
  async handle(request: Request, response: Response) {
    const { clientCode } = request.query;

    const getClientUseCase = container.resolve(GetClientUseCase);

    const client = await getClientUseCase.execute(clientCode as string);

    return response.json(client);
  }
}
