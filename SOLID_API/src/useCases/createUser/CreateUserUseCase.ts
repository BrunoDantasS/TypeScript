import { User } from "../../models/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepositories } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {

  constructor(
    private usersRepository: IUsersRepositories,
    private mailProvider: IMailProvider,
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    const user = new User(data);

    await  this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'App Team',
        email: 'team@app.com',
      },
      subject: 'Wellcome to App',
      body: '<p>You can now login to our platform</p>',
    });
  }
}
