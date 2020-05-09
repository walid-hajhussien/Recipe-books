import {Action} from '@ngrx/store';

export enum NetworkActionType {
  CHECK_NETWORK = '[NETWORK] CHECK_NETWORK',
  UPDATE_NETWORK = '[NETWORK] UPDATE_NETWORK'
}

export class CheckNetworkAction implements Action {
  public readonly type = NetworkActionType.CHECK_NETWORK;
}

export class UpdateNetworkAction implements Action {
  public readonly type = NetworkActionType.UPDATE_NETWORK;

  constructor(public payload: boolean) {
  }
}

export type TypeNetworkActions = CheckNetworkAction | UpdateNetworkAction;
