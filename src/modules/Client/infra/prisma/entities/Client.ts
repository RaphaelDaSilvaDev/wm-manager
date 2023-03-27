import { v4 as uuidV4 } from "uuid";

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
  status!: boolean;
  paymentValue!: number;
  paymentDate!: Date;
  contractorName!: string;
  contractorDocument!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
