import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(search: string) {
    const users = await this.userRepository.listAll(search);

    return users;
  }
}
