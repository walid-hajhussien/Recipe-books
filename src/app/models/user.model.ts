export class UserModel {
  public localId: string;
  public email: string;
  private token: string;
  private tokenExpirationDate: Date;
  private refreshToken: string;


  constructor(localId: string, email: string, token: string, tokenExpirationDate: Date, refreshToken: string) {
    this.localId = localId;
    this.email = email;
    this.token = token;
    this.tokenExpirationDate = tokenExpirationDate;
    this.refreshToken = refreshToken;
  }

  get getToken(): string {
    if (!this.token || (new Date() > this.tokenExpirationDate)) {
      return null;
    }
    return this.token;
  }
}
