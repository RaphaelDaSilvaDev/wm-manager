import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditClientUseCase } from "./EditClientUseCase";

export class EditClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const {
      addressCity,
      addressDistrict,
      addressNumber,
      addressState,
      addressStreet,
      avatar,
      cellphoneNumber,
      cep,
      email,
      phoneNumber
    } = request.body;

    const editClientUseCase = container.resolve(EditClientUseCase);

    const client = await editClientUseCase.execute(
      {
        addressCity,
        addressDistrict,
        addressNumber,
        addressState,
        addressStreet,
        avatar,
        cellphoneNumber,
        cep,
        email,
        phoneNumber
      },
      id
    );

    return response.json(client);
  }
}
