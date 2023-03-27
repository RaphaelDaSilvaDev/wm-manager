import { v4 as uuidV4 } from "uuid";

export class User {
  id?: string;
  name!: string;
  username!: string;
  password!: string;
  permission!: string;
  avatar?: string | any;
  status!: boolean;
  createdAt!: Date;
  updatedAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
