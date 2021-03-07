import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(
    private createUserCase: CreateUserUseCase,
  ) {}

  async hendle(request: Request, response: Response): Promise<Response> {
    const {
      password,
      name,
      telephone,
      email,
      age,
      weight,
      ethnicity,
      adress,
      number,
      complement,
      postalCode,
      city,
      state,
    } = request.body;

    try {
      await this.createUserCase.execute({
        password,
        name,
        telephone,
        email,
        age,
        weight,
        ethnicity,
        adress,
        number,
        complement,
        postalCode,
        city,
        state,
      })
      
      return response.status(201).send();

    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }

  }
}