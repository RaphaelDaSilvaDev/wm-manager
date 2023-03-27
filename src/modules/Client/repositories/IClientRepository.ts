import { Client } from "../infra/prisma/entities/Client";
import { IEditClient } from "../interfaces/IEditClient";

export interface IClientRepository {
  getClientBySubdomain(clientCode: string): Promise<Client | null>;
  findById(id: string): Promise<Client | null>;
  editClient(data: IEditClient, id: string): Promise<Client>;
}
