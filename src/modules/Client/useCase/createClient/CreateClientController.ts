import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const {
      name,
      socialName,
      document,
      cep,
      addressState,
      addressCity,
      addressStreet,
      addressNumber,
      addressDistrict,
      phoneNumber,
      cellphoneNumber,
      email,
      contractorName,
      contractorDocument
    } = request.body;

    const avatar = request.file?.filename;

    const createClientUseCase = container.resolve(CreateClientUseCase);

    const client = await createClientUseCase.execute({
      name,
      socialName,
      document,
      cep,
      addressCity,
      addressDistrict,
      addressNumber,
      addressState,
      addressStreet,
      cellphoneNumber,
      contractorDocument,
      contractorName,
      email,
      phoneNumber,
      avatar
    });

    return response.json(client);
  }
}
