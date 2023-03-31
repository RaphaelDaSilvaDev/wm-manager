import { v4 as uuidV4 } from "uuid";
import { Expose } from "class-transformer";

export class Client {
  id?: string;
  name!: string;
  socialName!: string;
  document!: string;
  cep!: string;
  addressState!: string;
  addressCity!: string;
  addressStreet!: string;
  addressNumber!: string;
  addressDistrict!: string;
  clientCode!: string;
  phoneNumber!: string;
  cellphoneNumber!: string;
  email!: string;
  avatar?: string | any;
  avatar_url?: string | any;
  status!: boolean;
  contractorName!: string;
  contractorDocument!: string;
  plansId!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
