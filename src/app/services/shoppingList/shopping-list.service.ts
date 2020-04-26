import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../interfaces/store/app-state-interface';


@Injectable({
  providedIn: 'root'
})
export class SShoppingListService {

  constructor(private store: Store<AppStateInterface>) {
  }

}
