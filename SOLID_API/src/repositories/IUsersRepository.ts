import { User } from "../models/User";

export interface IUsersRepositories {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}