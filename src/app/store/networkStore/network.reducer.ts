import {NetworkStateInterface} from '../../interfaces/store/network-state-interface';
import {NetworkActionType, TypeNetworkActions} from './network.action';

export function networkReducer(state: NetworkStateInterface, action: TypeNetworkActions) {
  switch (action.type) {
    case NetworkActionType.UPDATE_NETWORK:
      return {
        ...state,
        online: action.payload
      };
    default:
      return state;

  }

}
