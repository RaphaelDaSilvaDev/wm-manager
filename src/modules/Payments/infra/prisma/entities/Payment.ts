import { v4 as uuidV4 } from "uuid";

export class Payment {
  id?: string;
  plansId!: string;
  clientId!: string;
  dueDate!: Date;
  paymentQRCode!: string | null;
  paymentQRCodeText!: string | null;
  paymentQRCodePrice!: number | null;
  paymentQRCodeDueDate!: Date | null;
  paymentTxId!: string | null;
  paymentE2EId!: string | null;
  paymentDate!: Date | null;
  status!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor() {
    if (this.id) {
      this.id = uuidV4();
    }
  }
}
