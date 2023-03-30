import { v4 as uuidV4 } from "uuid";

export class Payment {
  id!: string;
  plansId!: string;
  clientId!: string;
  dueDate!: Date;
  createdAt!: Date;
  updatedAt!: Date;

  constructor() {
    if (this.id) {
      this.id = uuidV4();
    }
  }
}
