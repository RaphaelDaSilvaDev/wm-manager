import prismaClient from "../../../../../shared/infra/prisma/prismaClient";
import { ICreateClientPrisma } from "../../../interfaces/ICreateClient";
import { IEditClient } from "../../../interfaces/IEditClient";
import { IClientRepository } from "../../../repositories/IClientRepository";
import { Client } from "../entities/Client";

export class ClientRepository implements IClientRepository {
  async getClientBySubdomain(clientCode: string): Promise<Client | null> {
    const client = await prismaClient.client.findFirst({ where: { clientCode } });
    return client;
  }

  async findById(id: string): Promise<Client | null> {
    const client = await prismaClient.client.findUnique({ where: { id } });
    return client;
  }

  async editClient(
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
    }: IEditClient,
    id: string
  ): Promise<Client> {
    const client = await prismaClient.client.update({
      where: { id },
      data: {
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
      }
    });

    return client;
  }

  async findByDocument(document: string): Promise<Client | null> {
    const client = await prismaClient.client.findFirst({ where: { document } });
    return client;
  }

  async createClient(data: ICreateClientPrisma): Promise<Client> {
    const client = await prismaClient.client.create({ data });
    return client;
  }
}
