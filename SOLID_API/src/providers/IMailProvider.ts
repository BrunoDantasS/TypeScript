interface IAdress {
  name: string;
  email: string;
}

export interface IMessage {
  to: IAdress;
  from: IAdress;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMail(massage: IMessage): Promise<void>;
}