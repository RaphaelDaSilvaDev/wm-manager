import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientUseCase } from "./CreateClientUseCase";
import { CreatePaymentUseCase } from "../../../Payments/useCase/CreatePayment/CreatePaymentUseCase";

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
      contractorDocument,
      plansId
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
      avatar,
      plansId
    });

    const createPaymentUseCase = container.resolve(CreatePaymentUseCase);

    if (client.id) {
      await createPaymentUseCase.execute({ clientId: client.id, plansId: client.plansId });
    }

    return response.json(client);
  }
}
