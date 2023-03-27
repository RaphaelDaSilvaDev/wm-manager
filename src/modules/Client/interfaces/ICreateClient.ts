export interface ICreateClient {
  name: string;
  socialName: string;
  document: string;
  cep: string;
  addressState: string;
  addressCity: string;
  addressStreet: string;
  addressNumber: string;
  addressDistrict: string;
  phoneNumber: string;
  cellphoneNumber: string;
  email: string;
  avatar?: string | any;
  contractorName: string;
  contractorDocument: string;
}

export interface ICreateClientPrisma {
  name: string;
  socialName: string;
  document: string;
  cep: string;
  addressState: string;
  addressCity: string;
  addressStreet: string;
  addressNumber: string;
  addressDistrict: string;
  phoneNumber: string;
  cellphoneNumber: string;
  email: string;
  avatar?: string | any;
  contractorName: string;
  contractorDocument: string;
  paymentValue: number;
  paymentDate: Date;
  clientCode: string;
}