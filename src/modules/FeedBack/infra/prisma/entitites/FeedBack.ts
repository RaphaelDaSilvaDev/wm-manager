import { v4 as uuidV4 } from "uuid";

export class FeedBack {
  id?: string;
  title!: string;
  feedBackText!: string;
  clientId!: string;
  updatedAt!: Date;
  createdAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
