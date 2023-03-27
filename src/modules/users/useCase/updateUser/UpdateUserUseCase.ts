import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  id: string;
  username?: string;
  password?: string;
}

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ id, username, password }: IRequest) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError("This user is not exists");
    }

    if (!username && !password) {
      throw new AppError("You need set a username or a password for update");
    }

    if (username) {
      user.username = username;
    }

    if (password) {
      const passwordEncrypted = await hash(password, 8);

      user.password = passwordEncrypted;
    }

    await this.userRepository.update(user);
  }
}
