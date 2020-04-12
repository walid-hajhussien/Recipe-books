export class User {
  public id: string;
  public email: string;
  private token: string;
  private tokenExpirationDate: Date;


  constructor(id: string, email: string, token: string, tokenExpirationDate: Date) {
    this.id = id;
    this.email = email;
    this.token = token;
    this.tokenExpirationDate = tokenExpirationDate;
  }

  get getToken(): string {
    if (!this.token || (new Date() > this.tokenExpirationDate)) {
      return null;
    }
    return this.token;
  }
}
