import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class ToggleUserStatusUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError("User don't exists!");
    }

    user.status = !user.status;

    await this.userRepository.update(user);
  }
}
