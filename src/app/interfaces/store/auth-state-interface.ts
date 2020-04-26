import {UserModel} from '../../models/user.model';

export interface AuthStateInterface {
  user: UserModel;
  errorMessage: string;
  loading: boolean;
}
