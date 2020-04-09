export class CredentialsModel {
  email: string;
  password: string;
  returnSecureToken: boolean;

  constructor(email: string, password: string, returnSecureToken: boolean = true) {
    this.email = email;
    this.password = password;
    this.returnSecureToken = returnSecureToken;
  }
}
