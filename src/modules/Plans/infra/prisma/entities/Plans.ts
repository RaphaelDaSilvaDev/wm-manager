import { v4 as uuidV4 } from "uuid";

export class Plans {
  id!: string;
  name!: string;
  description?: string | null;
  itens!: string[];
  dueDays!: string;
  value!: number;
  createdAt!: Date;
  updatedAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
