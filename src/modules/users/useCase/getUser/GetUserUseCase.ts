import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class GetUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(id: string) {
    const user = await this.userRepository.findById(id);

    return user;
  }
}
