import { uuid } from "uuidv4";

export class User {
  public readonly id: string;
  public password: string;
  public name: string;
  public telephone: string;
  public email: string;
  public age: string;
  public weight: string;
  public ethnicity: Enumerator;
  public adress: string;
  public number: string;
  public complement: string;
  public postalCode: string;
  public city: string;
  public state: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }

  }
  
}