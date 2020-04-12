import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'errorMessage'
})
export class ErrorMessagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let errorMessage = '';
    switch (value) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Your Email Is Already Exists !';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'This Password Is Not Allow !';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'Server Busy Please Try Again Later...';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email Not Found !';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid Password !';
        break;
      case 'USER_DISABLED':
        errorMessage = 'User Disabled !';
        break;
      default:
        errorMessage = 'Server Error Please Try Again Later...';
        break;

    }
    return errorMessage;
  }

}
