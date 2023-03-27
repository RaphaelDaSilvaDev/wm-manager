export interface ICreateUser {
  id?: string;
  name: string;
  username: string;
  password: string;
  permission: string;
  status?: boolean;
  avatar?: string;
}
