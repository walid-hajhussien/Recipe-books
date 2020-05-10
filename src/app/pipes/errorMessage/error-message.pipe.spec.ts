import {ErrorMessagePipe} from './error-message.pipe';

fdescribe('ErrorMessagePipe', () => {
  it('create an instance', () => {
    const pipe = new ErrorMessagePipe();
    expect(pipe).toBeTruthy();
  });
  it('Transform EMAIL_EXISTS to Your Email Is Already Exists !', () => {
    const pipe = new ErrorMessagePipe();
    expect(pipe.transform('EMAIL_EXISTS')).toEqual('Your Email Is Already Exists !');
  });
});
